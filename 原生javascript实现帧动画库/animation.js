'use strict';
// 初始化状态
var STATE_INITAL = 0;
// 开始状态
var STATE_START = 1;
// 停止状态
var STATE_STOP = 2;

var TASK_SYNC = 0;
// 异步任务
var TASK_ASYNC = 1;
var loadImage = require('./imageloader');
/**
 * 帧动画库类
 */
function Animation(){
	this.taskQueue = [];
	this.index = 0;
	this.state = STATE_INITAL;
}
/**
 * 添加一个同步任务，去预加载图片
 */
Animation.prototype.loadImage = function(imglist){
	var taskFn = function(next){
		loadImage(imglist.slice(),next);
	}
	var type = TASK_SYNC;
	return this._add(taskFn,tyoe);
}

Animation.prototype.changePosition = function(ele,positions,imageUrl){

}
/**
 * 添加一个异步定时任务，通过改变image标签的src属性，实现帧动画
 * @param  {[type]} ele     [description]
 * @param  {[type]} imglist [description]
 */
Animation.prototype.changeSrc = function(ele,imglist){

}
/**
 * 高级用法，添加一个异步定时执行的任务
 * 该任务自定义梅珍执行的任务函数
 * @param  {[type]} taskFn [description]
 * @return {[type]}        [description]
 */
Animation.prototype.enterFrame = function(taskFn){

}

Animation.prototype.then = function(callback){

}
/**
 * 开始执行任务  一步定义任务执行的间隔
 * @param  {[type]} interval [description]
 * @return {[type]}          [description]
 */
Animation.prototype.start = function(interval){
	if(this.state ==STATE_START){
		return this;
	}
	if(!this.taskQueue.length){
		return this;
	}
	this.state = STATE_START;
	this.interval = interval;
	this._runTask();
	return this;
}
/**
 * 添加一个同步任务，该任务就是回退到上一个任务中，实现重复上一个任务的效果，定义重复次数
 * @param  {[type]} times [description]
 * @return {[type]}       [description]
 */
Animation.prototype.repeat = function(times){

}
/**
 * 添加一个同步任务，相当于repeat()更有好的借口，无限循环上一次任务
 * @return {[type]} [description]
 */
Animation.prototype.repeatForever = function(){

}
/**
 * 设置当前任务结束后到下一个任务开始前的等待时间
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
Animation.prototype.wait = function(time){

}
/**
 * 暂停当前异步定时任务
 * @return {[type]} [description]
 */
Animation.prototype.pause = function(){

}
/**
 * 重新执行上一次暂停的异步任务
 * @return {[type]} [description]
 */
Animation.prototype.restart = function(){

}
/**
 * 释放资源，定时任务的资源占用
 * @return {[type]} [description]
 */
Animation.prototype.dispose = function(){

}
// 类内部去掉用的方法  添加一个任务到任务队列
Animation.prototype._add = function(taskFn,type){
	this.taskQueue.push({
		taskFn:taskFn,
		type:type
	})
	return this;
}
/**
 * 执行任务
 * @return {[type]} [description]
 */
Animation.prototype._runTask = function(){
	if(!this.taskQueue || this.state !== STATE_START){
		return;
	}
	if(this.index === this.taskQueue.length){
		this.dispose();
		return;
	}
	// 获得任务链上当前的任务
	var task = this.taskQueue[this.index];
	if(task.type ===TASK_SYNC){
		this._syncTask(task);
	}else{
		this._asyncTask(task);
	}
}
Animation.prototype._syncTask = function(task){
	var me = this;
	var next = function(){
		//切换到下一个任务
		me._next();
	}
	var taskFn = task.taskFn;
	taskFn(next);
}
Animation.prototype._next = function(){
	this.index++;
	this._runTask();
}
Animation.prototype._asyncTask = function(task){
	
}