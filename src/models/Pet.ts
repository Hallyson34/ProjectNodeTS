import {data, Pets, PetType} from './data';

export const Pet = {
    getall: ():Pets[] => data,
    filterByType: (type: PetType):Pets[] =>
        data.filter(pet => pet.type === type),
    filterByName: (name: string): Pets[] => 
        data.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase()))
}
