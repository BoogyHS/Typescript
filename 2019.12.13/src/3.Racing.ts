interface IRacing {
    createRacer(name: string, fuel: number, position: number): object,
    consumeFuel(usedFuel: number, name: string): any,
    overtake(gained: string, lost: string): any
}