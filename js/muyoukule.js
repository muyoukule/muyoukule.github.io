// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功了哦！✨",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})



function darkmode_() {
    const willChangeMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    if (willChangeMode === 'dark') {
        activateDarkMode()
        // GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
        new Vue({
            data: function () {
                this.$notify({
                    title: "关灯啦🌙",
                    message: "当前已成功切换至夜间模式！",
                    position: "top-left",
                    offset: 50,
                    showClose: !0,
                    type: "success",
                    duration: 5e3
                })
            }
        })

    } else {
        activateLightMode()
        // GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
        new Vue({
            data: function () {
                this.$notify({
                    title: "开灯啦🌞",
                    message: "当前已成功切换至白天模式！",
                    position: "top-left",
                    offset: 50,
                    showClose: !0,
                    type: "success",
                    duration: 5e3
                })
            }
        })

    }
    saveToLocal.set('theme', willChangeMode, 2)
    handleThemeChange(willChangeMode)



}
// 防抖
function darkmode() {
    debounce(darkmode_, 300);
}
