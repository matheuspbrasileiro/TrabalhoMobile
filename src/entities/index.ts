export interface Usuario {
    id?: number;
    address: string;
    age?: number;
    name: string;
    email: string;
    userPassword: string;    

}

export interface Produto {
    id: number;
    name: string;    
    price: number; 
    amount:number;
    factory:Fabrica; 
}

export interface Fabrica {
    id: number;
    name: string;    
}