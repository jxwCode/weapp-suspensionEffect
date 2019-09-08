//index.js
Page({
    data: {
        fixedTop: 0,
        isTop: false,
        segmentTitles: ["公益演出", "公益讲座"],
        images: ["../../images/test.png", "../../images/test.png", "../../images/test.png"],
        list_show: [{
            image: "../../images/test.png",
            name: "演 韩雪",
            time: "2019.07.03-07.07",
            position: "上海",
        }, {
            image: "../../images/test.png",
            name: "白夜行乐剧",
            time: "2019.07.03-07.07",
            position: "上海",
        }, {
            image: "../../images/test.png",
            name: "额二个人个人个人",
            time: "2019.07.03-07.07",
            position: "上海",
        }, {
            image: "../../images/test.png",
            name: "额二个人个人个人",
            time: "2019.07.03-07.07",
            position: "上海",
        }, {
            image: "../../images/test.png",
            name: "额二个人个人个人",
            time: "2019.07.03-07.07",
            position: "上海",
        }, {
            image: "../../images/test.png",
            name: "额二个人个人个人",
            time: "2019.07.03-07.07",
            position: "上海",
        }, {
            image: "../../images/test.png",
            name: "额二个人个人个人",
            time: "2019.07.03-07.07",
            position: "上海",
        }, {
            image: "../../images/test.png",
            name: "额二个人个人个人",
            time: "2019.07.03-07.07",
            position: "上海",
        }]
    },

    onLoad: function() {
        var that = this
        wx.getSystemInfo({
            success: function(res) {
                let width = res.windowWidth
                let height = res.windowHeight
                let top = width / 750 * 370
                that.setData({
                    fixedTop: top
                })
            },
        })
    },

    onPageScroll: function(e) {
        let isTop = e.scrollTop > this.data.fixedTop
        if (isTop) {
            if (!this.data.isTop) {
                this.setData({
                    isTop: true
                })
            }
        } else {
            if (this.data.isTop) {
                this.setData({
                    isTop: false
                })
            }
        }
    },
})