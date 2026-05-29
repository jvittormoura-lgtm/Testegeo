// 1. Configura o leitor de PMTiles
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// 2. Caminhos para os arquivos na pasta 'data'
const URL_LOT_CJ = "https://jvittormoura-lgtm.github.io/Testegeo/data/lot_cj_hab.pmtiles";

// 3. Inicializa o mapa
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    center: [-46.6333, -23.5505], // Centralizado em São Paulo
    zoom: 10
});

map.addControl(new maplibregl.NavigationControl(), 'top-right');

// 4. Carrega as camadas quando o mapa base estiver pronto
map.on('load', () => {
    
    // --- CAMADA 3: LOTEAMENTOS E CONJ. HABITACIONAIS (Vermelho) ---
    map.addSource('fonte-lot-cj', {
        type: 'vector',
        url: `pmtiles://${URL_LOT_CJ}`
    });
    
    map.addLayer({
        id: 'camada-lot-cj',
        source: 'fonte-lot-cj',
        'source-layer': 'lot_cj_hab', // <-- NOME CORRIGIDO AQUI!
        type: 'fill', 
        paint: {
            'fill-color': '#FF0000', 
            'fill-opacity': 0.6,
            'fill-outline-color': '#FFFFFF'
        }
    });
    
});
