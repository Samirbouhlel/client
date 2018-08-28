import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitMockService{

    private PRODUITS: Produit[] = [];
    constructor(){
        let p1: Produit =new Produit('livre',50,20);
        let p2: Produit =new Produit('stylo',100,15);
        let p3: Produit =new Produit('cahier',20,500);
       this. PRODUITS.push(p1);
       this. PRODUITS.push(p2);
       this. PRODUITS.push(p3);
    }

    public getProduits(): Produit[]{
        return this.PRODUITS;
    }
}