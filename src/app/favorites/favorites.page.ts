import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  post:object = {
		 nomeDoUsuario:'Tef',
		 texto: 'xabu',
		 horario: '11:00',
		 numeroDeLikes: 20,
		 numeroDeDislikes: 10,
		 episodioRelacionado: 'Buffy',
		 respostasDoPost: 'koe',
		 estadoDoLike: false,
		 anexo: 'tef.jpg',
		 quantidadeDeComp: 15

}

	likes(post: any){
		if (post.estadoDoLike == false){
			post.estadoDoLike = true;
			post.numeroDeLikes++;
		} 
		if (post.estadoDoLike == true){
			post.estadoDoLike = false;
			post.numeroDeLikes--;
		}
		
	}
}