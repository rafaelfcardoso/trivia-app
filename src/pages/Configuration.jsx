import React from 'react';
import '../CSS/Configuration.css';

class Configuration extends React.Component {
  render() {
    return (
      <section className="Configuration">
        <h1 data-testid="settings-title" className="App">Configurações</h1>
        <form className="form">
          <label htmlFor="categories">
            Categorias:
            <select
              id="categories"
              name="categories"
              onChange={ this.handleChange }
            >
              <option value="money">Science & Nature</option>
            </select>
          </label>
          <label htmlFor="dificulty">
            Categorias:
            <select
              id="dificulty"
              name="dificulty"
              onChange={ this.handleChange }
            >
              <option value="easy">Fácil</option>
              <option value="medium">Médio</option>
              <option value="hard">Difícil</option>
            </select>
          </label>
          <label htmlFor="type">
            Tipo:
            <select
              id="type"
              name="type"
              onChange={ this.handleChange }
            >
              <option value="any-type">Qualquer tipo</option>
              <option value="multiple-choices">Múltiplas Alternativas</option>
              <option value="true-or-false">Verdadeiro/False</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

export default Configuration;

/* RASCUNHO PARA O MAP DAS CONFIGURACOES---------------

const results = [
  {
    category: 'Sports',
    type: 'multiple',
    difficulty: 'medium',
    question: 'How many scoring zones are there on a conventional dart board?',
    correct_answer: '82',
    incorrect_answers: [
      '62',
      '42',
      '102',
    ],
  },
  {
    category: 'Science & Nature',
    type: 'multiple',
    difficulty: 'easy',
    question: 'Which of the following blood vessels carries deoxygenated blood?',
    correct_answer: 'Pulmonary Artery',
    incorrect_answers: [
      'Pulmonary Vein',
      'Aorta',
      'Coronary Artery',
    ],
  }];

const resultado = results.map(({ category }) => category);
console.log(resultado);
 */
