define(['jquery','scrollTo'],function($,scrollTo){
    function BackTop(el,opts){
        this.opts = $.extend({},BackTop.DEFAULTS,opts);
        this.$el = $(el);
        this.scroll = new scrollTo.ScrollTo({
            dest:0,
            speed:this.opts.speed
        });
        this._checkPosition();
        if(this.opts.mode=='move'){
            this.$el.on('click',$.proxy(this._move,this));
        }else{
            this.$el.on('click',$.proxy(this._go,this));
        }
        $(window).on('scroll',$.proxy(this._checkPosition,this));
    }
    BackTop.DEFAULTS = {
        mode:'move',
        pos:$(window).height(),
        speed:800
    };
    BackTop.prototype._move=function(){
        this.scroll.move();
    };
    BackTop.prototype._go=function(){
        this.scroll.go();
    };
    BackTop.prototype._checkPosition=function(){
        if($(window).scrollTop()>this.opts.pos){
            this.$el.fadeIn();
        }else{
            this.$el.fadeOut();
        }
    }
    $.fn.extend({
        backtop:function(){
            return this.each(function(opts){
                new BackTop(this,opts);
            });
            // return this;
        }
    });
    return {
        BackTop:BackTop
    }
});