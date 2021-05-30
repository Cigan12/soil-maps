export interface IAPIPostCreateAreaResponse {}

export type TAPIGetAreasResponse = Array<{
    id: number;
    name: string;
    properties: {
        id_field: number;
        type: string;
        culture: string;
        area_ha: number;
        area_km2: number;
        per_êì: number;
        KR: number;
        uklon: number;
        coeffRelef: number;
        Ball_energ: number;
        length_ì: number;
        width_ì: number;
        configurat: number;
        ball_conto: number;
        distance_ê: number;
        index_tex: number;
    };
    geometry: { type: string; coordinates: Array<[number, number]> };
}>;
