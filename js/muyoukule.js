// 防抖全局计时器
let TT = null;
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "复制成功！✨",
                    message: "若要转载最好保留原文链接哦！",
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

function share_() {
    let url = window.location.origin + window.location.pathname
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| muyoukule") ? title.substring(0, title.length - 12) : title;
        navigator.clipboard.writeText('标题：' + subTitle + '\n链接：' + url);
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享信息🎉",
                    message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('复制失败！', err);
    }

}
// 防抖
function share() {
    debounce(share_, 300);
}

function darkmode_() {
    const willChangeMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    if (willChangeMode === 'dark') {
        activateDarkMode()
        // GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
        new Vue({
            data: function () {
                this.$notify({
                    title: "切换成功！",
                    message: "当前已成功切换至深色模式！",
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
                    title: "切换成功！",
                    message: "当前已成功切换至浅色模式！",
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
}
// 防抖
function darkmode() {
    debounce(darkmode_, 300);
}

var now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    var grt = new Date("03/11/2024 00:00:00");	// 网站诞生时间
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9
            ? `<div style="font-size:13px;font-weight:bold">本站已苟活 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒</div>`
            : `<div style="font-size:13px;font-weight:bold">本站已苟活 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒</div>`),
        document.getElementById("workboard") &&
        (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);


function formatISODateTime(isoDate) {
    const date = new Date(isoDate);

    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');

    return `${year}/${month}/${day}  ${hours}:${minutes}:${seconds}`;
}

const changeTimeInEssay = () => {
    document.querySelector("#bber") && document.querySelectorAll("#bber time").forEach((e) => {
        const o = e.getAttribute("datetime");
        if (o) {
            e.innerText = formatISODateTime(o); // 使用新的formatISODateTime函数  
            e.style.display = "inline";
        }
    });
}





