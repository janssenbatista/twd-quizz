import { Injectable } from '@angular/core';
import { __values } from 'tslib';

export type Question = {
  title: string;
  answers: {
    description: string;
    value: string;
  }[];
};

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  questions: Question[] = [
    // 1
    {
      title:
        'Em um grupo de sobreviventes, o que você priorizaria ao escolher um local para estabelecer um acampamento?',
      answers: [
        {
          description: 'Segurança impenetrável contra ameaças externas',
          value: 'a',
        },
        {
          description:
            'Acesso a recursos essenciais para garantir a sobrevivência',
          value: 'b',
        },
        {
          description:
            'Isolamento, minimizando o risco de encontros com outros sobreviventes',
          value: 'c',
        },
        {
          description:
            'Um equilíbrio entre segurança, recursos e a possibilidade de contato com outros grupos',
          value: 'd',
        },
      ],
    },
    // 2
    {
      title:
        'Como você reagiria diante de um membro do grupo que se mostra instável mentalmente, colocando a segurança de todos em risco?',
      answers: [
        {
          description:
            'Tentaria ajudar, oferecendo apoio emocional e buscando soluções',
          value: 'a',
        },
        {
          description:
            'Manteria distância, observando a situação antes de agir',
          value: 'b',
        },
        {
          description: 'Isolaria imediatamente a pessoa para proteger o grupo',
          value: 'c',
        },
        {
          description:
            'Buscaria a orientação do grupo para decidir o melhor curso de ação',
          value: 'd',
        },
      ],
    },
    // 3
    {
      title:
        'Na busca por provisões, o que você consideraria mais importante encontrar?',
      answers: [
        {
          description: 'Armas e munições para defesa contra ameaças',
          value: 'a',
        },
        {
          description:
            'Alimentos não perecíveis para garantir a sustentação a longo prazo',
          value: 'b',
        },
        {
          description:
            'Equipamentos médicos e remédios para tratar ferimentos e doenças',
          value: 'c',
        },
        {
          description:
            'Informações sobre o ambiente e possíveis perigos nas proximidades',
          value: 'd',
        },
      ],
    },
    // 4
    {
      title:
        'Como você lidaria com um traidor no grupo, revelando-se uma ameaça interna?',
      answers: [
        {
          description:
            'Expulsaria imediatamente, protegendo a integridade do grupo',
          value: 'a',
        },
        {
          description:
            'Confrontaria, buscando entender as motivações antes de tomar uma decisão',
          value: 'b',
        },
        {
          description:
            'Agiria secretamente para neutralizar a ameaça sem causar tumulto',
          value: 'c',
        },
        {
          description: 'Consultaria o grupo para decidir o destino do traidor',
          value: 'd',
        },
      ],
    },
    // 5
    {
      title:
        'Na formação de alianças com outros grupos de sobreviventes, o que você consideraria crucial para a parceria?',
      answers: [
        {
          description: 'Força militar e capacidade de defesa conjunta',
          value: 'a',
        },
        {
          description: 'Compatibilidade ética e moral entre os grupos',
          value: 'b',
        },
        {
          description: 'Recursos compartilhados de forma justa e equitativa',
          value: 'c',
        },
        {
          description: 'Capacidade de compartilhar informações estratégicas',
          value: 'd',
        },
      ],
    },
    // 6
    {
      title:
        'Como você reagiria diante de um novo membro no grupo que parece ser um especialista em estratégias de sobrevivência?',
      answers: [
        {
          description:
            'Receberia com entusiasmo, reconhecendo a importância de habilidades estratégicas',
          value: 'a',
        },
        {
          description:
            'Observaria de longe, avaliando a intenção por trás das habilidades',
          value: 'b',
        },
        {
          description:
            'Ficaria desconfiado(a), temendo que a pessoa possa ser uma ameaça',
          value: 'c',
        },
        {
          description:
            'Consultaria o grupo antes de tomar decisões sobre a integração do novo membro',
          value: 'd',
        },
      ],
    },
    // 7
    {
      title:
        'Qual seria a sua abordagem ao enfrentar um grande grupo de zumbis em um ambiente urbano?',
      answers: [
        {
          description: 'Atacaria diretamente, usando estratégias agressivas.',
          value: 'a',
        },
        {
          description:
            'Planejaria rotas de fuga eficazes antes de tomar qualquer ação.',
          value: 'b',
        },
        {
          description:
            'Evitaria confronto, optando por desviar do grupo de zumbis.',
          value: 'c',
        },
        {
          description:
            'Tentaria criar uma distração para afastar os zumbis antes de prosseguir.',
          value: 'd',
        },
      ],
    },
    // 8
    {
      title:
        'Como você contribuiria para o entretenimento e moral do grupo em meio à tensão constante do apocalipse zumbi?',
      answers: [
        {
          description: 'Contando histórias inspiradoras para motivar o grupo.',
          value: 'a',
        },
        {
          description:
            'Organizando atividades práticas para manter a mente ocupada.',
          value: 'b',
        },
        {
          description:
            'Preferindo o isolamento para evitar a carga emocional do grupo.',
          value: 'c',
        },
        {
          description:
            'Criando estratégias para enfrentar desafios, mantendo todos engajados.',
          value: 'd',
        },
      ],
    },
    // 9
    {
      title:
        'Diante de uma escassez crítica de recursos, como você decidiria quais membros do grupo receberiam prioridade?',
      answers: [
        {
          description:
            'Aqueles com habilidades essenciais para a sobrevivência do grupo.',
          value: 'a',
        },
        {
          description: 'Por votação democrática entre os membros do grupo.',
          value: 'b',
        },
        {
          description:
            'Considerando relações próximas, priorizando amigos e familiares.',
          value: 'c',
        },
        {
          description:
            'Distribuindo os recursos de maneira justa e equitativa entre todos.',
          value: 'd',
        },
      ],
    },
    // 10
    {
      title:
        'Se tivesse que escolher entre confiar em um estranho ou enfrentar a situação sozinho(a), qual seria sua escolha?',
      answers: [
        {
          description: 'Confiaria no estranho, acreditando na força da união.',
          value: 'a',
        },
        {
          description: 'Avaliaria cuidadosamente o estranho antes de decidir.',
          value: 'b',
        },
        {
          description:
            'Preferiria enfrentar a situação sozinho(a), confiando em sua própria capacidade.',
          value: 'c',
        },
        {
          description:
            'Consultaria o grupo antes de tomar uma decisão significativa.',
          value: 'd',
        },
      ],
    },
  ];

  constructor() {}

  getQuestions() {
    return this.questions;
  }
}
