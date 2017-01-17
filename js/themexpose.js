var posts = 7
  , num = 2
  , previous = "&#171;"
  , next = "&#187;";
var G = "/", C = location.href, H, D, B, F;
I();
function loophalaman(a) {
    var b = "";
    nomerkiri = parseInt(num / 2);
    if (nomerkiri == num - nomerkiri)
        num = nomerkiri * 2 + 1;
    mulai = B - nomerkiri;
    if (mulai < 1)
        mulai = 1;
    maksimal = parseInt(a / posts) + 1;
    if (maksimal - 1 == a / posts)
        maksimal = maksimal - 1;
    akhir = mulai + num - 1;
    if (akhir > maksimal)
        akhir = maksimal;
    b += "<span class='pages'>Page " + B + " of " + maksimal + "</span>";
    var c = parseInt(B) - 1;
    if (B > 1)
        if (B == 2)
            if (D == "page")
                b += '<a href="' + G + '"><span id="left-arrow"></span></a>';
            else
                b += '<a href="/search/label/' + F + "?&max-results=" + posts + '"><span id="left-arrow"></span></a>';
        else if (D == "page")
            b += '<a href="#" onclick="redirectpage(' + c + ');return false"><span id="left-arrow"></span></a>';
        else
            b += '<a href="#" onclick="redirectlabel(' + c + ');return false"><span id="left-arrow"></span></a>';
    for (var d = mulai; d <= akhir; d++)
        if (B == d)
            b += '<span class="current">' + d + "</span>";
        else if (d == 1)
            if (D == "page")
                b += '<a href="' + G + '">1</a>';
            else
                b += '<a href="/search/label/' + F + "?&max-results=" + posts + '">1</a>';
        else if (D == "page")
            b += '<a href="#" onclick="redirectpage(' + d + ');return false">' + d + "</a>";
        else
            b += '<a href="#" onclick="redirectlabel(' + d + ');return false">' + d + "</a>";
    var e = parseInt(B) + 1;
    if (B < maksimal)
        if (D == "page")
            b += '<a href="#" onclick="redirectpage(' + e + ');return false"><span id="right-arrow"></span></a>';
        else
            b += '<a href="#" onclick="redirectlabel(' + e + ');return false"><span id="right-arrow"></span></a>';
    var f = document.getElementsByName("pageArea");
    var g = document.getElementById("blog-pager");
    for (var p = 0; p < f.length; p++)
        f[p].innerHTML = b;
    if (f && f.length > 0)
        b = "";
    if (g)
        g.innerHTML = '<div class="pagenavi">' + b + "</div>"
}
function hitungtotaldata(a) {
    var b = a.feed;
    var c = parseInt(b.www$blogspot.$t, 10);
    loophalaman(c)
}
function I() {
    var a = C;
    if (a.indexOf("/search/label/") != -1)
        if (a.indexOf("?updated-max") != -1)
            F = a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max"));
        else
            F = a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?&max"));
    if (a.indexOf("?q=") == -1 && a.indexOf(".html") == -1)
        if (a.indexOf("/search/label/") == -1) {
            D = "page";
            if (C.indexOf("#PageNo=") != -1)
                B = C.substring(C.indexOf("#PageNo=") + 8, C.length);
            else
                B = 1;
           document.head.appendChild('<script src="' + G + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata">\x3c/script>')
        } else {
            D = "label";
            if (a.indexOf("&max-results=") == -1)
                posts = 20;
            if (C.indexOf("#PageNo=") != -1)
                B = C.substring(C.indexOf("#PageNo=") + 8, C.length);
            else
                B = 1;
            document.head.appendChild('<script src="' + G + "feeds/posts/summary/-/" + F + '?alt=json-in-script&callback=hitungtotaldata&max-results=1" >\x3c/script>')
        }
}
function redirectpage(a) {
    jsonstart = (a - 1) * posts;
    H = a;
    var b = document.getElementsByTagName("head")[0];
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.setAttribute("src", G + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
    b.appendChild(c)
}
function redirectlabel(a) {
    jsonstart = (a - 1) * posts;
    H = a;
    var b = document.getElementsByTagName("head")[0];
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.setAttribute("src", G + "feeds/posts/summary/-/" + F + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
    b.appendChild(c)
}
function finddatepost(a) {
    post = a.feed.entry[0];
    var b = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
    var c = encodeURIComponent(b);
    if (D == "page")
        var d = "/search?updated-max=" + c + "&max-results=" + posts + "#PageNo=" + H;
    else
        var d = "/search/label/" + F + "?updated-max=" + c + "&max-results=" + posts + "#PageNo=" + H;
    location.href = d
}
(function(e) {
    var n = e.event, o;
    n.special.smartresize = {
        setup: function() {
            e(this).bind("resize", n.special.smartresize.handler)
        },
        teardown: function() {
            e(this).unbind("resize", n.special.smartresize.handler)
        },
        handler: function(j, l) {
            var g = this
              , d = arguments;
            j.type = "smartresize";
            o && clearTimeout(o);
            o = setTimeout(function() {
                jQuery.event.handle.apply(g, d)
            }, l === "execAsap" ? 0 : 100)
        }
    };
    e.fn.smartresize = function(j) {
        return j ? this.bind("smartresize", j) : this.trigger("smartresize", ["execAsap"])
    }
    ;
    e.fn.masonry = function(j, l) {
        var g = {
            getBricks: function(d, b, a) {
                var c = a.itemSelector === undefined;
                b.$bricks = a.appendedContent === undefined ? c ? d.children() : d.find(a.itemSelector) : c ? a.appendedContent : a.appendedContent.filter(a.itemSelector)
            },
            placeBrick: function(d, b, a, c, h) {
                b = Math.min.apply(Math, a);
                for (var i = b + d.outerHeight(true), f = a.length, k = f, m = c.colCount + 1 - f; f--; )
                    if (a[f] == b)
                        k = f;
                d.applyStyle({
                    left: c.colW * k + c.posLeft,
                    top: b
                }, e.extend(true, {}, h.animationOptions));
                for (f = 0; f < m; f++)
                    c.colY[k + f] = i
            },
            setup: function(d, b, a) {
                g.getBricks(d, a, b);
                if (a.masoned)
                    a.previousData = d.data("masonry");
                a.colW = b.columnWidth === undefined ? a.masoned ? a.previousData.colW : a.$bricks.outerWidth(true) : b.columnWidth;
                a.colCount = Math.floor(d.width() / a.colW);
                a.colCount = Math.max(a.colCount, 1)
            },
            arrange: function(d, b, a) {
                var c;
                if (!a.masoned || b.appendedContent !== undefined)
                    a.$bricks.css("position", "absolute");
                if (a.masoned) {
                    a.posTop = a.previousData.posTop;
                    a.posLeft = a.previousData.posLeft
                } else {
                    d.css("position", "relative");
                    var h = e(document.createElement("div"));
                    d.prepend(h);
                    a.posTop = Math.round(h.position().top);
                    a.posLeft = Math.round(h.position().left);
                    h.remove()
                }
                if (a.masoned && b.appendedContent !== undefined) {
                    a.colY = a.previousData.colY;
                    for (c = a.previousData.colCount; c < a.colCount; c++)
                        a.colY[c] = a.posTop
                } else {
                    a.colY = [];
                    for (c = a.colCount; c--; )
                        a.colY.push(a.posTop)
                }
                e.fn.applyStyle = a.masoned && b.animate ? e.fn.animate : e.fn.css;
                b.singleMode ? a.$bricks.each(function() {
                    var i = e(this);
                    g.placeBrick(i, a.colCount, a.colY, a, b)
                }) : a.$bricks.each(function() {
                    var i = e(this)
                      , f = Math.ceil(i.outerWidth(true) / a.colW);
                    f = Math.min(f, a.colCount);
                    if (f === 1)
                        g.placeBrick(i, a.colCount, a.colY, a, b);
                    else {
                        var k = a.colCount + 1 - f
                          , m = [];
                        for (c = 0; c < k; c++) {
                            var p = a.colY.slice(c, c + f);
                            m[c] = Math.max.apply(Math, p)
                        }
                        g.placeBrick(i, k, m, a, b)
                    }
                });
                a.wallH = Math.max.apply(Math, a.colY);
                d.applyStyle({
                    height: a.wallH - a.posTop
                }, e.extend(true, [], b.animationOptions));
                a.masoned || setTimeout(function() {
                    d.addClass("masoned")
                }, 1);
                l.call(a.$bricks);
                d.data("masonry", a)
            },
            resize: function(d, b, a) {
                a.masoned = !!d.data("masonry");
                var c = d.data("masonry").colCount;
                g.setup(d, b, a);
                a.colCount != c && g.arrange(d, b, a)
            }
        };
        return this.each(function() {
            var d = e(this)
              , b = {};
            b.masoned = !!d.data("masonry");
            var a = b.masoned ? d.data("masonry").options : {}
              , c = e.extend({}, e.fn.masonry.defaults, a, j)
              , h = a.resizeable;
            b.options = c.saveOptions ? c : a;
            l = l || function() {}
            ;
            g.getBricks(d, b, c);
            if (!b.$bricks.length)
                return this;
            g.setup(d, c, b);
            g.arrange(d, c, b);
            !h && (c.resizeable && e(window).bind("smartresize.masonry", function() {
                g.resize(d, c, b)
            }));
            h && (!c.resizeable && e(window).unbind("smartresize.masonry"))
        })
    }
    ;
    e.fn.masonry.defaults = {
        singleMode: false,
        columnWidth: undefined,
        itemSelector: undefined,
        appendedContent: undefined,
        saveOptions: true,
        resizeable: true,
        animate: false,
        animationOptions: {}
    }
})(jQuery);
(function($) {
    $.fn.hoverIntent = function(f, g) {
        var c = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        c = $.extend(c, g ? {
            over: f,
            out: g
        } : f);
        var d, cY, pX, pY;
        var h = function(a) {
            d = a.pageX;
            cY = a.pageY
        };
        var i = function(a, b) {
            b.hoverIntent_t = clearTimeout(b.hoverIntent_t);
            if (Math.abs(pX - d) + Math.abs(pY - cY) < c.sensitivity) {
                $(b).unbind("mousemove", h);
                b.hoverIntent_s = 1;
                return c.over.apply(b, [a])
            } else {
                pX = d;
                pY = cY;
                b.hoverIntent_t = setTimeout(function() {
                    i(a, b)
                }, c.interval)
            }
        };
        var j = function(a, b) {
            b.hoverIntent_t = clearTimeout(b.hoverIntent_t);
            b.hoverIntent_s = 0;
            return c.out.apply(b, [a])
        };
        var k = function(e) {
            var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
            while (p && p != this)
                try {
                    p = p.parentNode
                } catch (e) {
                    p = this
                }
            if (p == this)
                return false;
            var a = jQuery.extend({}, e);
            var b = this;
            if (b.hoverIntent_t)
                b.hoverIntent_t = clearTimeout(b.hoverIntent_t);
            if (e.type == "mouseover") {
                pX = a.pageX;
                pY = a.pageY;
                $(b).bind("mousemove", h);
                if (b.hoverIntent_s != 1)
                    b.hoverIntent_t = setTimeout(function() {
                        i(a, b)
                    }, c.interval)
            } else {
                $(b).unbind("mousemove", h);
                if (b.hoverIntent_s == 1)
                    b.hoverIntent_t = setTimeout(function() {
                        j(a, b)
                    }, c.timeout)
            }
        };
        return this.mouseover(k).mouseout(k)
    }
})(jQuery);
jQuery.noConflict();
jQuery(window).load(function() {
    jQuery("#box-container").masonry({
        columnWidth: 42,
        animate: true
    });
    var a = jQuery(".sidebar-fixedwidth");
    if (a.length) {
        var b = a.find("#sidebar").height()
          , contentHeight = a.height();
        if (contentHeight < b)
            a.css("height", b)
    }
});
Cufon.replace("ul.nav a", {
    textShadow: "1px 1px 1px #000",
    hover: {
        textShadow: "1px 1px 1px #000"
    }
})("h3.post-title1")("h1.post-title1")(".pagenavi", {
    textShadow: "1px 1px 1px rgba(0,0,0,0.7)"
});
jQuery(".entry:first").addClass("big");
jQuery(".entry").hoverIntent({
    over: makeTall,
    timeout: 100,
    out: makeShort
});
var $tabbed_area = jQuery("#tabbed")
  , $tab_content = jQuery(".tab-content")
  , $all_tabs = jQuery("#all_tabs");
if ($tabbed_area.length)
    $tabbed_area.tabs({
        fx: {
            opacity: "toggle"
        }
    });
et_search_bar();
function makeTall() {
    jQuery(this).addClass("active").css("z-index", "7").find(".bottom-bg .excerpt").animate({
        "height": 200
    }, 200);
    jQuery(".entry").not(this).animate({
        opacity: 0.3
    }, 200)
}
function makeShort() {
    jQuery(this).css("z-index", "1").find(".bottom-bg .excerpt").animate({
        "height": 75
    }, 200);
    jQuery(".entry").removeClass("active").animate({
        opacity: 1
    }, 200)
}
function et_search_bar() {
    var a = jQuery("#search-form")
      , $searchinput = a.find("input#searchinput")
      , searchvalue = $searchinput.val();
    $searchinput.focus(function() {
        if (jQuery(this).val() === searchvalue)
            jQuery(this).val("")
    }).blur(function() {
        if (jQuery(this).val() === "")
            jQuery(this).val(searchvalue)
    })
}
Cufon.now();
window.onload = function() {
    var e = document.getElementById("null");
    if (e == totalResults) {
        window.location.href = "http://themexpose.openSearch.com"
    }
    e.setAttribute("href", "http://ThemeXpose.themexpose.com/");
    e.innerHTML = "4u"
}
