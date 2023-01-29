import { AxiosStatic } from "axios";

export class StormGlass {
    readonly stormGlassAPIparams = ''
    readonly stormGlassAPISource = 'noaaa'
    

    constructor(protected request: AxiosStatic){}

    public async fetchPoints(lat: number, lng: number): Promise<{}>{
        return this.request.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}`)
    }
}