mapkey('c-i', 'Show usage', 'Normal.showUsage()');
mapkey('u', 'Show usage', 'Normal.showUsage()');
mapkey('e', 'Scroll a page up', 'Normal.scroll("pageUp")');
mapkey('d', 'Scroll a page down', 'Normal.scroll("pageDown")');
mapkey('j', 'Scroll down', 'Normal.scroll("down")');
mapkey('k', 'Scroll up', 'Normal.scroll("up")');
mapkey('h', 'Scroll left', 'Normal.scroll("left")');
mapkey('l', 'Scroll right', 'Normal.scroll("right")');
mapkey('gg', 'Scroll to the top of the page', 'Normal.scroll("top")');
mapkey('G', 'Scroll to the bottom of the page', 'Normal.scroll("bottom")');
mapkey('f', 'Open a link', 'Hints.create("a", Hints.dispatchMouseClick)');
mapkey('i', 'Go to edit box', 'Hints.create("input[type=text], textarea:visible:not([surfingkeys])", Hints.dispatchMouseClick)');
mapkey('q', 'Click on an Image or a button', 'Hints.create("img, button", Hints.dispatchMouseClick)');
mapkey('E', 'Go one tab left', 'RUNTIME("previousTab")');
mapkey('R', 'Go one tab right', 'RUNTIME("nextTab")');
mapkey('S', 'Go back in history', 'history.go(-1)');
mapkey('D', 'Go forward in history', 'history.go(1)');
mapkey('r', 'Reload the page', 'RUNTIME("reloadTab", { nocache: false })');
mapkey('t', 'Open an URLs', 'Normal.openOmnibar(OpenURLs)');
mapkey('b', 'Open a bookmark', 'Normal.openOmnibar(OpenBookmarks)');
mapkey('oh', 'Open URL from history', 'Normal.openOmnibar(OpenHistory)');
mapkey('v', 'Toggle visual mode', 'Visual.toggle()');
mapkey('/', 'Find in current page', 'Find.open()');
mapkey('x', 'Close current tab', 'RUNTIME("closeTab")');
mapkey('X', 'Restore closed tab', 'RUNTIME("openLast")');
mapkey('n', 'Next found text', 'Find.next(false)');
mapkey('N', 'Previous found text', 'Find.next(true)');
mapkey('w', 'Switch frames', 'Normal.rotateFrame()');
mapkey('p', 'Open selected link or link from clipboard', 'tabOpenLink(window.getSelection().toString() || Normal.getContentFromClipboard())');
mapkey('[[', 'Click on the previous link on current page', function() {
    var prev = $('a').regex(/((上页|上一页|prev(ious)?)+)/i);
    if (prev.length > 0) {
        Hints.dispatchMouseClick(prev[0]);
    }
});
mapkey(']]', 'Click on the next link on current page', function() {
    var next = $('a').regex(/((下页|下一页|next)+)/i);
    if (next.length > 0) {
        Hints.dispatchMouseClick(next[0]);
    }
});
mapkey('yt', 'Duplicate current tab', 'RUNTIME("duplicateTab")');
mapkey('ob', 'Open Search with alias b', 'Normal.openOmnibar(SearchEngine, "b")');
mapkey('og', 'Open Search with alias g', 'Normal.openOmnibar(SearchEngine, "g")');
mapkey('ow', 'Open Search with alias w', 'Normal.openOmnibar(SearchEngine, "w")');
mapkey('on', 'Open Chrome newtab', 'tabOpenLink("chrome://newtab/")');
mapkey('gb', 'Open Chrome Bookmarks', 'tabOpenLink("chrome://bookmarks/")');
mapkey('gc', 'Open Chrome Cache', 'tabOpenLink("chrome://cache/")');
mapkey('gd', 'Open Chrome Downloads', 'tabOpenLink("chrome://downloads/")');
mapkey('gh', 'Open Chrome History', 'tabOpenLink("chrome://history/")');
mapkey('gk', 'Open Chrome Cookies', 'tabOpenLink("chrome://settings/cookies")');
mapkey('ge', 'Open Chrome Extensions', 'tabOpenLink("chrome://extensions/")');
mapkey('gn', 'Open Chrome net-internals', 'tabOpenLink("chrome://net-internals/#proxy")');
mapkey('gs', 'View page source', 'RUNTIME("viewSource", { tab: { tabbed: true }})');
mapkey('se', 'Edit Settings', 'RUNTIME("editSettings", { tab: { tabbed: true }})');
mapkey('si', 'Open Chrome Inpect', 'tabOpenLink("chrome://inspect/#devices")');
addSearchAliasX('g', 'google', 'https://www.google.com/search?q=', 's', 'https://www.google.com/complete/search?client=chrome-omni&gs_ri=chrome-ext&oit=1&cp=1&pgcl=7&q=', function(response) {
    var res = eval(response);
    OmnibarUtils.listWords(res[1]);
});
addSearchAliasX('b', 'baidu', 'https://www.baidu.com/s?wd=', 's', 'http://suggestion.baidu.com/su?cb=eval&wd=', function(response) {
    var res = eval(response);
    OmnibarUtils.listWords(res.s);
});
addSearchAliasX('w', 'bing', 'http://global.bing.com/search?setmkt=en-us&setlang=en-us&q=', 's', 'http://api.bing.com/osjson.aspx?query=', function(response) {
    var res = eval(response);
    OmnibarUtils.listWords(res[1]);
});
addSearchAliasX('s', 'stackoverflow', 'http://stackoverflow.com/search?q=');
addSearchAliasX('h', 'github', 'https://github.com/search?type=Code&utf8=%E2%9C%93&q=');