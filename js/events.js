var data = JSON.parse(document.getElementById("variables").innerHTML),
    conversionApiUrl = data.conversionApiUrl,
    sessionApiUrl = data.sessionApiUrl;

function getUrlParams() {
    let e = new URL(window.location.href),
        s = document.getElementById("newmedalid").textContent,
        a = e.searchParams.get("ad_id") || " ",
        t = e.searchParams.get("adset_id") || " ",
        n = e.searchParams.get("campaign_id") || " ",
        o = e.searchParams.get("ad_name") || " ",
        i = e.searchParams.get("adset_name") || " ",
        r = e.searchParams.get("campaign_name") || " ",
        g = e.searchParams.get("placement") || " ",
        d = e.searchParams.get("site_source_name") || " ",
        c = e.searchParams.get("fbclid") || " ",
        m = navigator.userAgent;
    sessionStorage.session_id = s, sessionStorage.ad_id = a, sessionStorage.adset_id = t, sessionStorage.campaign_id = n, sessionStorage.ad_name = o, sessionStorage.adset_name = i, sessionStorage.campaign_name = r, sessionStorage.placement = g, sessionStorage.site_source_name = d, sessionStorage.userAgent = m, sessionStorage.fbclid = c
}

function getSessionStorageParams() {
    return {
        ad_id: sessionStorage.ad_id,
        adset_id: sessionStorage.adset_id,
        campaign_id: sessionStorage.campaign_id,
        ad_name: sessionStorage.ad_name,
        adset_name: sessionStorage.adset_name,
        campaign_name: sessionStorage.campaign_name,
        placement: sessionStorage.placement,
        site_source_name: sessionStorage.site_source_name,
        session_id: sessionStorage.session_id,
        userAgent: sessionStorage.userAgent,
        fbclid: sessionStorage.fbclid,
        clickid: sessionStorage.clickid
    }
}
const storeUserSession = () => {
    getUrlParams(), dataObject = getSessionStorageParams();
    var e = new XMLHttpRequest;
    e.open("POST", sessionApiUrl, !0), e.onload = function(s) {
        4 === e.readyState && (200 === e.status ? (console.log("It is 200"), console.log(e.responseText)) : (console.log("It is other"), console.error(e.statusText)))
    }, e.onerror = function(s) {
        console.error(e.statusText)
    }, e.send(JSON.stringify(dataObject))
};