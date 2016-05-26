import {Component, _} from 'rgui-base';
import template from './index.rgl';

/**
 * @class Overlay
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.open               <=> 当前为展开/收起状态
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
let Overlay = Component.extend({
    name: 'overlay',
    template: template,
    /**
     * @protected
     */
    config() {
        this.data = Object.assign({
            open: false,
            direction: 'bottomleft',
            animation: 'on: enter; class: animated fadeInY fast; on: leave; class: animated fadeOutY fast;'
        }, this.data);
        this.supr();
    },
    /**
     * @method toggle(open) 展开/收起
     * @public
     * @param  {boolean} open 展开/收起状态。如果无此参数，则在两种状态之间切换。
     * @return {void}
     */
    toggle(open) {
        if(this.data.disabled)
            return;

        if(open === undefined)
            open = !this.data.open;
        this.data.open = open;

        // 根据状态在Overlay.opens列表中添加/删除管理项
        let index = Overlay.opens.indexOf(this);
        if(open && index < 0)
            Overlay.opens.push(this);
        else if(!open && index >= 0)
            Overlay.opens.splice(index, 1);

        /**
         * @event toggle  展开/收起时触发
         * @property {object} sender 事件发送对象
         * @property {object} open 展开/收起状态
         */
        this.$emit('toggle', {
            sender: this,
            open: open
        });
    },
    destroy() {
        let index = Overlay.opens.indexOf(this);
        index >= 0 && Overlay.opens.splice(index, 1);
        this.supr();
    }
});

// 处理点击toggle之外的地方后的收起事件。
Overlay.opens = [];
_.dom.on(document, 'click', (e) => {
    Overlay.opens.forEach((overlay, index) => {
        // 这个地方不能用stopPropagation来处理，因为展开一个overlay的同时要收起其他overlay
        let element = overlay.$refs.element;
        let element2 = e.target;
        while(element2) {
            if(element === element2)
                return;
            element2 = element2.parentElement;
        }
        overlay.toggle(false);
        overlay.$update();
    });
});

Overlay.Head = Component.extend({
    name: 'overlay.head',
    template: '<div class="overlay_hd" on-click={this.$outer.toggle()}>{#inc this.$body}</div>'
});

Overlay.Body = Component.extend({ //  r-animation={@(this.$outer.data.animation)}
    name: 'overlay.body',
    template: '<div class="overlay_bd" r-show={this.$outer.data.open}>{#inc this.$body}</div>'
});

export default Overlay;
