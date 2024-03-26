// 实现选项卡功能
function init() {
    // TODO 待补充代码
    let tab = document.querySelector('.tabs')
    let tabs = tab.querySelectorAll('div')
    let cont = document.querySelector('#content')
    let conts = cont.querySelectorAll('div')
    let activeIndex = 0 //设置当前激活节点
    let tabsArr = Array.from(tabs)
    tab.addEventListener('click', function (e) {
        if (e.target.tagName === "DIV") {
            let clickIndex = tabsArr.indexOf(e.target) //获取当前点击节点在tabs中的索引
            if (clickIndex !== activeIndex) {
                tabs[activeIndex].classList.remove('active')
                conts[activeIndex].classList.remove('active')
                conts[clickIndex].classList.add('active')
                tabs[clickIndex].classList.add('active')
            }
            activeIndex = clickIndex
        }

    })
}
init();