"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Play, Copy, Check, Terminal, MapPin, Navigation, Info, ExternalLink } from "lucide-react";

export default function ApiConsole() {
  const t = useTranslations("apis.console");

  const [activeApi, setActiveApi] = useState<"nominatim" | "routing">("nominatim");
  const [nominatimMode, setNominatimMode] = useState<"search" | "reverse">("search");
  const [activeCodeTab, setActiveCodeTab] = useState<"curl" | "js" | "python">("curl");

  // Inputs
  const [searchAddress, setSearchAddress] = useState("Rua Bento Viana, 1200, Batel, Curitiba");
  const [reverseLat, setReverseLat] = useState("-25.4420");
  const [reverseLon, setReverseLon] = useState("-49.2850");
  const [routeStartLat, setRouteStartLat] = useState("-25.4420");
  const [routeStartLon, setRouteStartLon] = useState("-49.2850");
  const [routeEndLat, setRouteEndLat] = useState("-25.4480");
  const [routeEndLon, setRouteEndLon] = useState("-49.2790");

  // Output states
  const [responseJson, setResponseJson] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isCopied, setIsCopied] = useState(false);
  const [isFallback, setIsFallback] = useState(false);

  // Generate Snippets
  const getCurlSnippet = () => {
    if (activeApi === "nominatim") {
      if (nominatimMode === "search") {
        return `curl -G "https://nominatim.somaping.online/search" \\
  --data-urlencode "q=${searchAddress}" \\
  --data-urlencode "format=json" \\
  --data-urlencode "addressdetails=1" \\
  --data-urlencode "limit=1"`;
      } else {
        return `curl "https://nominatim.somaping.online/reverse?lat=${reverseLat}&lon=${reverseLon}&format=json&addressdetails=1"`;
      }
    } else {
      return `curl -X POST "https://api.somaping.online/api/v1/routes" \\
  -H "Content-Type: application/json" \\
  -d '{
    "start_point": [${routeStartLon}, ${routeStartLat}],
    "end_point": [${routeEndLon}, ${routeEndLat}]
  }'`;
    }
  };

  const getJsSnippet = () => {
    if (activeApi === "nominatim") {
      if (nominatimMode === "search") {
        return `const url = new URL("https://nominatim.somaping.online/search");
url.searchParams.append("q", "${searchAddress}");
url.searchParams.append("format", "json");
url.searchParams.append("addressdetails", "1");
url.searchParams.append("limit", "1");

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`;
      } else {
        return `fetch("https://nominatim.somaping.online/reverse?lat=${reverseLat}&lon=${reverseLon}&format=json&addressdetails=1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`;
      }
    } else {
      return `fetch("https://api.somaping.online/api/v1/routes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    start_point: [${routeStartLon}, ${routeStartLat}],
    end_point: [${routeEndLon}, ${routeEndLat}]
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`;
    }
  };

  const getPythonSnippet = () => {
    if (activeApi === "nominatim") {
      if (nominatimMode === "search") {
        return `import requests

url = "https://nominatim.somaping.online/search"
params = {
    "q": "${searchAddress}",
    "format": "json",
    "addressdetails": 1,
    "limit": 1
}

response = requests.get(url, params=params)
print(response.json())`;
      } else {
        return `import requests

url = "https://nominatim.somaping.online/reverse"
params = {
    "lat": "${reverseLat}",
    "lon": "${reverseLon}",
    "format": "json",
    "addressdetails": 1
}

response = requests.get(url, params=params)
print(response.json())`;
      }
    } else {
      return `import requests

url = "https://api.somaping.online/api/v1/routes"
payload = {
    "start_point": [${routeStartLon}, ${routeStartLat}],
    "end_point": [${routeEndLon}, ${routeEndLat}]
}

response = requests.post(url, json=payload)
print(response.json())`;
    }
  };

  const activeSnippet = () => {
    switch (activeCodeTab) {
      case "curl": return getCurlSnippet();
      case "js": return getJsSnippet();
      case "python": return getPythonSnippet();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Run Request
  const runRequest = async () => {
    setStatus("loading");
    setIsFallback(false);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

    let fetchUrl = "";
    let fetchOptions: RequestInit = { signal: controller.signal };

    if (activeApi === "nominatim") {
      if (nominatimMode === "search") {
        fetchUrl = `https://nominatim.somaping.online/search?q=${encodeURIComponent(searchAddress)}&format=json&addressdetails=1&limit=1`;
      } else {
        fetchUrl = `https://nominatim.somaping.online/reverse?lat=${reverseLat}&lon=${reverseLon}&format=json&addressdetails=1`;
      }
      fetchOptions.method = "GET";
    } else {
      fetchUrl = "https://api.somaping.online/api/v1/routes";
      fetchOptions.method = "POST";
      fetchOptions.headers = { "Content-Type": "application/json" };
      fetchOptions.body = JSON.stringify({
        start_point: [parseFloat(routeStartLon), parseFloat(routeStartLat)],
        end_point: [parseFloat(routeEndLon), parseFloat(routeEndLat)]
      });
    }

    try {
      const response = await fetch(fetchUrl, fetchOptions);
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`HTTP status: ${response.status}`);
      }
      const data = await response.json();
      setResponseJson(JSON.stringify(data, null, 2));
      setStatus("success");
    } catch (err) {
      clearTimeout(timeoutId);
      console.warn("API Sandbox Request failed. Using fallback mock data. Error:", err);
      // Fallback response mapping
      setIsFallback(true);
      if (activeApi === "nominatim") {
        if (nominatimMode === "search") {
          setResponseJson(JSON.stringify([
            {
              "place_id": 556005,
              "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
              "osm_type": "way",
              "osm_id": 817802192,
              "lat": "-25.44204905",
              "lon": "-49.28496436217784",
              "display_name": `Primeira Igreja Batista de Curitiba, 1200, ${searchAddress}, Paraná, 80240-110, Brasil`,
              "class": "amenity",
              "type": "place_of_worship",
              "importance": 0.6300099999999998,
              "address": {
                "house_number": "1200",
                "road": "Rua Bento Viana",
                "suburb": "Batel",
                "city": "Curitiba",
                "state": "Paraná",
                "postcode": "80240-110",
                "country": "Brasil",
                "country_code": "br"
              }
            }
          ], null, 2));
        } else {
          setResponseJson(JSON.stringify({
            "place_id": 556005,
            "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
            "osm_type": "way",
            "osm_id": 817802192,
            "lat": reverseLat,
            "lon": reverseLon,
            "display_name": `Primeira Igreja Batista de Curitiba, 1200, Rua Bento Viana, Batel, Curitiba, Paraná, 80240-110, Brasil`,
            "address": {
              "road": "Rua Bento Viana",
              "suburb": "Batel",
              "city": "Curitiba",
              "state": "Paraná",
              "postcode": "80240-110",
              "country": "Brasil",
              "country_code": "br"
            }
          }, null, 2));
        }
      } else {
        setResponseJson(JSON.stringify({
          "success": true,
          "total_cost": 1240.5,
          "data": {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {
                  "distance_m": 1240.5,
                  "time_s": 185.0,
                  "profile": "car"
                },
                "geometry": {
                  "type": "LineString",
                  "coordinates": [
                    [parseFloat(routeStartLon), parseFloat(routeStartLat)],
                    [-49.283, -25.444],
                    [-49.281, -25.446],
                    [parseFloat(routeEndLon), parseFloat(routeEndLat)]
                  ]
                }
              }
            ]
          }
        }, null, 2));
      }
      setStatus("success");
    }
  };

  // Reset output when switching API tabs
  useEffect(() => {
    setResponseJson("");
    setStatus("idle");
    setIsFallback(false);
  }, [activeApi, nominatimMode]);

  return (
    <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-card">

      {/* Console Nav Bar */}
      <div className="bg-bg border-b border-border/60 px-6 py-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <div className="flex bg-white/80 p-1 rounded-xl border border-border/50 self-start">
          <button
            onClick={() => setActiveApi("nominatim")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${activeApi === "nominatim"
                ? "bg-navy text-white shadow"
                : "text-text-muted hover:text-navy"
              }`}
          >
            <MapPin size={16} />
            {t("tab_nominatim")}
          </button>
          <button
            onClick={() => setActiveApi("routing")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${activeApi === "routing"
                ? "bg-navy text-white shadow"
                : "text-text-muted hover:text-navy"
              }`}
          >
            <Navigation size={16} />
            {t("tab_routing")}
          </button>
        </div>

        {/* Browser Mock Actions (decor) */}
        <div className="hidden md:flex items-center gap-1.5 self-center">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">

        {/* Left Panel: Inputs & Code Snippets (6 cols) */}
        <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* API Mode Header / Sub-options */}
            {activeApi === "nominatim" && (
              <div className="mb-6 flex gap-4 p-1 bg-bg-alt rounded-lg border border-border/40">
                <button
                  onClick={() => setNominatimMode("search")}
                  className={`flex-1 text-center py-1.5 text-xs font-bold rounded-md transition-all ${nominatimMode === "search" ? "bg-white text-navy shadow-sm" : "text-text-muted hover:text-navy"
                    }`}
                >
                  Forward Geocoding
                </button>
                <button
                  onClick={() => setNominatimMode("reverse")}
                  className={`flex-1 text-center py-1.5 text-xs font-bold rounded-md transition-all ${nominatimMode === "reverse" ? "bg-white text-navy shadow-sm" : "text-text-muted hover:text-navy"
                    }`}
                >
                  Reverse Geocoding
                </button>
              </div>
            )}

            {/* Dynamic Input Fields */}
            <div className="space-y-4 mb-8">
              {activeApi === "nominatim" && nominatimMode === "search" && (
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    {t("input_address")}
                  </label>
                  <input
                    type="text"
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                    placeholder={t("input_address_placeholder")}
                    className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy font-medium"
                  />
                </div>
              )}

              {activeApi === "nominatim" && nominatimMode === "reverse" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Latitude
                    </label>
                    <input
                      type="text"
                      value={reverseLat}
                      onChange={(e) => setReverseLat(e.target.value)}
                      placeholder="-23.561"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Longitude
                    </label>
                    <input
                      type="text"
                      value={reverseLon}
                      onChange={(e) => setReverseLon(e.target.value)}
                      placeholder="-46.655"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy font-medium"
                    />
                  </div>
                </div>
              )}

              {activeApi === "routing" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        {t("input_origin")} (Lat)
                      </label>
                      <input
                        type="text"
                        value={routeStartLat}
                        onChange={(e) => setRouteStartLat(e.target.value)}
                        placeholder="-23.561"
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        {t("input_origin")} (Lon)
                      </label>
                      <input
                        type="text"
                        value={routeStartLon}
                        onChange={(e) => setRouteStartLon(e.target.value)}
                        placeholder="-46.655"
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        {t("input_dest")} (Lat)
                      </label>
                      <input
                        type="text"
                        value={routeEndLat}
                        onChange={(e) => setRouteEndLat(e.target.value)}
                        placeholder="-23.555"
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        {t("input_dest")} (Lon)
                      </label>
                      <input
                        type="text"
                        value={routeEndLon}
                        onChange={(e) => setRouteEndLon(e.target.value)}
                        placeholder="-46.662"
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy font-medium"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Code snippets header */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-navy uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal size={14} className="text-teal" />
                  {t("code_title")}
                </span>

                {/* Format selection */}
                <div className="flex bg-bg-alt rounded-lg p-0.5 border border-border/40 text-[11px] font-bold">
                  <button
                    onClick={() => setActiveCodeTab("curl")}
                    className={`px-2.5 py-1 rounded-md transition-all ${activeCodeTab === "curl" ? "bg-white text-navy shadow-sm" : "text-text-muted"
                      }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("js")}
                    className={`px-2.5 py-1 rounded-md transition-all ${activeCodeTab === "js" ? "bg-white text-navy shadow-sm" : "text-text-muted"
                      }`}
                  >
                    Fetch
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("python")}
                    className={`px-2.5 py-1 rounded-md transition-all ${activeCodeTab === "python" ? "bg-white text-navy shadow-sm" : "text-text-muted"
                      }`}
                  >
                    Python
                  </button>
                </div>
              </div>

              {/* Code viewer */}
              <div className="relative">
                <pre className="bg-navy text-white/95 p-5 rounded-2xl overflow-x-auto text-[12px] font-mono leading-relaxed max-h-56 shadow-inner border border-white/5">
                  <code>{activeSnippet()}</code>
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white rounded-lg p-2 transition-all border border-white/10"
                  title="Copy snippet"
                >
                  {isCopied ? <Check size={16} className="text-teal-light" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Run Request Button */}
          <div className="mt-8">
            <button
              onClick={runRequest}
              disabled={status === "loading"}
              className="w-full bg-teal text-white hover:bg-teal-light transition-all rounded-full py-4 text-sm font-bold shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <Play size={16} fill="currentColor" />
              {status === "loading" ? t("btn_testing") : t("btn_test")}
            </button>
          </div>
        </div>

        {/* Right Panel: JSON Response Viewer (6 cols) */}
        <div className="lg:col-span-6 p-6 md:p-8 flex flex-col bg-slate-950 text-slate-100 min-h-[400px]">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t("response_title")}
            </span>
            <div className="flex items-center gap-2">
              {status === "loading" && (
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
              )}
              {status === "success" && (
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              )}
              {isFallback && (
                <span className="text-[10px] bg-teal/20 text-teal-light border border-teal/30 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <Info size={10} /> Sandbox Mode
                </span>
              )}
              <span className="text-[10px] text-slate-500 font-mono">
                {status === "loading" ? "PENDING" : status === "success" ? "200 OK" : "IDLE"}
              </span>
            </div>
          </div>

          {/* JSON Display Area */}
          <div className="flex-grow flex flex-col justify-center">
            {status === "idle" ? (
              <div className="text-center py-12 text-slate-500">
                <Terminal size={40} className="mx-auto mb-4 text-slate-600 opacity-60" />
                <p className="text-sm font-medium">Click "Execute Call" to test the API endpoint</p>
                <p className="text-xs opacity-75 mt-1">Make request to somaping.online server</p>
              </div>
            ) : status === "loading" ? (
              <div className="text-center py-12 text-slate-500 animate-pulse">
                <div className="w-8 h-8 border-4 border-teal border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-sm font-medium">Fetching active response...</p>
              </div>
            ) : (
              <pre className="text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[450px] scrollbar-thin text-teal-light/95 p-1 font-semibold">
                <code>{responseJson}</code>
              </pre>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
