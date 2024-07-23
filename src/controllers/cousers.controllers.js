import { Cousers } from "../models/cousers.models.js";
const cousers = [
    {
        id: "5f1d36fc-8b54-4b63-8ed7-d9c40b58cc66",
        title: "Curso em Video",
        description: "O Curso em Vídeo é uma plataforma online que oferece uma grande variedade de cursos de informática gratuitos. Com a evolução acelerada da tecnologia, é importante manter-se atualizado e acompanhar as mudanças do mercado. O Curso em Vídeo é uma excelente oportunidade para quem deseja aprender mais sobre programação, desenvolvimento de sites, edição de vídeos, entre outros assuntos relacionados à tecnologia.",
        languagem: "Português"
    },
    {
        id: "79740773-539e-428d-bf62-bcfebaf6aaf2",
        title: "Fundação Bradesco",
        description: "A Fundação Bradesco é uma instituição sem fins lucrativos que oferece formação online gratuita em diversas áreas, incluindo curso de informática, tecnologia da informação, administração, finanças, marketing, recursos humanos, entre outros.",
        languagem: "Português"
    },
    {
        id: "bd6eec67-0b99-4437-b6e8-d0eede26f3eb",
        title: "Microsoft Learn",
        description: "Microsoft Learn é uma plataforma de aprendizado online criada pela Microsoft, que oferece cursos e treinamentos sem custos em diversas áreas de tecnologia, incluindo curso de informática, desenvolvimento de software, nuvem, inteligência artificial e segurança cibernética. A plataforma possui diversos recursos, como vídeos, tutoriais interativos, testes práticos e certificações, para ajudar os usuários a adquirir conhecimentos técnicos e habilidades em tecnologia",
        languagem: "Português"
    },
    {
        id: "8bd5e1e5-08a3-4150-9b56-b88ca4153a01",
        title: "Fundamentos da Tecnologia da Informação",
        description: "Aprenda sobre a história da computação e conceitos essenciais sobre peças de computador, conexões de rede, hardware, software, segurança de computador e técnicas de solução de problemas. Com 11 horas de duração, o conteúdo programático aborda noções básicas sobre computador e redes de computadores, além de introdução a conceitos como segurança, suporte ao cliente e muito mais.",
        languagem: "Inglês"
    },
    {
        id: "8192afa1-380a-4919-a2b4-a50a33928c8a",
        title: "Eu capacito",
        description: "Formação em DevOps e Agile Culture busca ensinar metodologias e práticas de desenvolvimento de software, UML, agilidade nas entregas, entre outros temas, distribuídos em 5 capítulos, somando 60h de estudo.",
        languagem: "Português"
    },
    {
        id: "518e322e-9cba-4576-a819-4bce014e6016",
        title: "Fundamentos de Desenvolvimento Web",
        description: "O curso tem 12 horas e oferece noções básicas de desenvolvimento da Web, introdução ao HTML e CSS, conteúdo sobre sites desenvolvidos com Javascript, teste e implantação de site, além de trazer informações sobre o cenário de trabalho da área.",
        languagem: "Inglês"
    }
];


export const createCousers = (title, description, languagem) => {
    const data = new Cousers(title, description, languagem);
    cousers.push(data);
    if (data) {
        return data;
    } else {
        return "Curso não adicionado, verifique se inseriu corretamente";
    };
};


export const getCouser = (id) => {
    const couserInformation = cousers.find(couser => couser.id == id);
    return couserInformation;
};


export const getAllCousers = (filter = null) => {
    if (filter.languagem != null) {
        return cousers.filter(couser => couser.languagem.toLowerCase() == filter.languagem.toLowerCase());
    };
    return cousers;
};


export const updateCousers = (id, description) => {
    const cousersAlreadyExist = cousers.find(update => update.id == id);
    if (cousersAlreadyExist) {
        let titleCousers = cousers.findIndex(update => update.id == id);
        cousers[titleCousers].description = description;
        return cousers[titleCousers];
    } else {
        return "Não possui curso com esse id";
    };
};


export const deleteCousers = (id) => {
    const cousersAlreadyExist = cousers.find(off => off.id == id);
    if (cousersAlreadyExist) {
        let indexCousers = cousers.findIndex(off => off.id == id);
        cousers.splice(indexCousers, 1);
        return cousers;
    } else {
        return "Curso não deletado, verifique id";
    };
};




