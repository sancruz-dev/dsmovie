package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

// ESSA CLASSE SALVA  SCORE NO BANCO.
// Registra o MovieService como um componente do sistema.
@Service
public class ScoreService {
	
	// Buscar o filme do BD a parte do ID do filme.
	// Também é preciso o uso do UserRepository para buscar o usuário por email. O mesmo é feito ao ScoreRepository.
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ScoreRepository scoreRepository;
	
	
	
	// Método para salvar um novo score do banco de dados a partir do objeto ScoreDTO.
	// Recuperar usuario do BD pelo email, se ele não existir, inserí-lo no BD.
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		// dto.getEmail() é o email que chegou no dto, o arqumento deste método.
		
		if(user == null) {
			// 1. Criando com o email dentro dele.
			user = new User();
			user.setEmail(dto.getEmail());
			 
			// 2. Salvando no BD.
			user  = userRepository.saveAndFlush(user);
		}
		
		// movie rebendo o objeto do BD.
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
		
		// Preparando em memóriao objeto Score.
		Score score = new Score();
		
		// Os três dados para serem inseridos à memória.
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		// Salvando Score.
		score = scoreRepository.saveAndFlush(score);

		// movie.getScore: Dá o acesso à lista de scores associadas à um certo filme.
		// Por isso é feito um 'for' nele, para percorrê-lo.
		double soma = 0.0;
		for (Score s : movie.getScores()) {
			soma = soma + s.getValue();
		}
		
		int qtd = movie.getScores().size();
		double media = soma / qtd;
		
		movie.setScore(media);
		movie.setCount(qtd);
		
		movie = movieRepository.save(movie);
		
		// Convertendo o movie para DTO e o retornando.
		return new MovieDTO(movie);
	}
}
