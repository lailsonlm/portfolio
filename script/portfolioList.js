const portfolioList = [
  {
    title: 'Plataforma de evento',
    url: 'https://event-platform-lailsonlm.vercel.app/',
    thumbnail: 'images/projeto_event_plataform_small.jpg',
    description: 'Plataforma de evento desenvolvida com ReactJS, Tailwind CSS, GraphCMS, Apollo Client, GraphQL e CodeGen.',
    id: 'portfolio0',
  },
  {
    title: 'COMUNIDEV',
    url: 'https://comunidev.vercel.app/',
    thumbnail: 'images/projeto_comunidev_small.jpg',
    description: 'Projeto desenvolvido em NextJS, ChakraUI, React Query, banco de dados PostegreSQL e Autenticação com Supabase.',
    id: 'portfolio1',
  },
  {
    title: 'Sorteio de Times',
    url: 'https://sorteiotimes.netlify.app/',
    thumbnail: 'images/projeto_team_draw_small.jpg',
    description: 'Projeto simples desenvolvido em NextJS e Styled Components para realizar sorteios de times de forma aleatória.',
    id: 'portfolio2',
  },
  {
    title: 'Marvel API',
    url: 'https://marvel-api-lailsonlm.vercel.app/',
    thumbnail: 'images/projeto_marvelapi_small.jpg',
    description: 'Projeto desenvolvido em NextJS + ChakraUI + React Query, consumindo os dados da API pública da Marvel.',
    id: 'portfolio3',
  },
  {
    title: 'Worldtrip',
    url: 'https://worldtrip-lailsonlm.vercel.app/',
    thumbnail: 'images/projeto_worldtrip_small.jpg',
    description: 'Aplicação Next.js, simulando uma agência de viagem, com o uso do ChakraUI e API Routes para listagem dos continentes e cidades.',
    id: 'portfolio4',
  },
  {
    title: 'Spacetraveling',
    url: 'https://ignite-space-traveling.vercel.app/',
    thumbnail: 'images/projeto_spacetraveling_small.jpg',
    description: 'Blog desenvolvido em Next.js, consumindo os dados do PISMIC CMS, com paginação, comentários e navegação entres os posts.',
    id: 'portfolio5',
  },
  {
    title: 'Github Profiles',
    url: 'https://github-profiles-lailsonlm.vercel.app/',
    thumbnail: 'images/projeto_githubprofiles_small.jpg',
    description: 'Pesquisa de informações do usuário utilizando a API do GitHub.',
    id: 'portfolio6',
  },
  {
    title: 'To Do List',
    url: '#portfolio',
    thumbnail: 'images/projeto_todo_small.jpg',
    description: 'Aplicação React para gerenciamento de tarefas.',
    id: 'portfolio7',
  },
  {
    title: 'Gitkut',
    url: 'https://gitkut-lailsonlm.vercel.app/login',
    thumbnail: 'images/projeto_gitkut_small.jpg',
    description: 'Clone do antigo Orkut utilizando API do Github para login e consumo das informações.',
    id: 'portfolio8',
  },
  {
    title: 'Clone Netflix',
    url: '#portfolio',
    thumbnail: 'images/projeto_netflix_small.jpg',
    description: 'Clone Netflix utilizando HTML, CSS e JavaScript.',
    id: 'portfolio9',
  },
]

const container = document.querySelector('.container_portfolio')

const portfolioResult = portfolioList.map(portfolio => {
  const portfolio_div_container = document.createElement("div");
  portfolio_div_container.setAttribute("class", "portfolio_list")
  portfolio_div_container.setAttribute("data-anime", "bottom")
  
  const portfolio_thumbnail_container = document.createElement("div");
  portfolio_thumbnail_container.setAttribute("class", "bg_portfolio");
  portfolio_thumbnail_container.setAttribute("id", portfolio.id);
  
  const portfolio_thumbnail = document.createElement("img");
  portfolio_thumbnail.setAttribute("src", portfolio.thumbnail)

  const portfolio_title_div = document.createElement("div");
  portfolio_title_div.setAttribute("class", "title");

  const portfolio_title_h2 = document.createElement("h2");
  portfolio_title_h2.innerHTML = portfolio.title;

  const portfolio_link = document.createElement("a");
  portfolio_link.setAttribute("href", portfolio.url)
  portfolio_link.setAttribute("target", portfolio.url === '#portfolio' ? "_self" : "_blank")

  const portfolio_icon = document.createElement("img");
  portfolio_icon.setAttribute("src", "images/external-link.svg")

  const portfolio_divider = document.createElement("div");
  portfolio_divider.setAttribute("class", "dvider");
  portfolio_divider.innerHTML = '•'

  const portfolio_description = document.createElement("p");
  portfolio_description.innerHTML = portfolio.description;

  portfolio_div_container.appendChild(portfolio_thumbnail_container)

  portfolio_thumbnail_container.appendChild(portfolio_thumbnail)

  portfolio_div_container.appendChild(portfolio_title_div)

  portfolio_title_div.appendChild(portfolio_title_h2)
  portfolio_title_div.appendChild(portfolio_link)
  portfolio_link.appendChild(portfolio_icon)

  portfolio_div_container.appendChild(portfolio_divider)

  portfolio_div_container.appendChild(portfolio_description)

  container.appendChild(portfolio_div_container)

  return container
})