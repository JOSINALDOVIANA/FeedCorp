export const MENUADM = [
	{
		menutitle: 'Administrador',
		Items: [
			{
				title: 'Meu Painel',
				icon: 'ti-layout',
				type: 'link',
				active: true,
				selected: true,
				path: `${process.env.PUBLIC_URL}/dashboard`,
			},
			{
				title: 'Minha corporação',
				icon: 'bi-building',
				type: 'link',
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/corporacao`,
			},
			{
				title: 'Desempenho',
				icon: 'ti-bar-chart',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/okr`,
						type: 'link',
						active: false,
						selected: false,
						title: 'OKR'
					},
					{
						path: `${process.env.PUBLIC_URL}/avaliacao_por_resultado`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Avaliação por resultados'
					},
				]
			},
			{
				title: 'Engajamento',
				icon: 'ti-stats-up',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/climapulso`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Clima Pulso'
					},
				]
			},
			{
				title: 'Minhas avaliações',
				icon: 'bi-book-half',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/minhas_okrs`,
						type: 'link',
						active: false,
						selected: false,
						title: 'OKR'
					},
					{
						path: `${process.env.PUBLIC_URL}/minhas_av_resultados`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Av. por resultados'
					},
					{
						path: `${process.env.PUBLIC_URL}/meus_climas_pulso`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Clima Pulso'
					},
				]
			},
			{
				title: 'Administração',
				icon: 'ti-settings',
				type: 'link',
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/configuracoes`,
			},
			{
				title: 'Feedbacks',
				icon: 'ti-settings',
				type: 'link',
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/feedback_cliente`,
			},
			
		]
	},

];

export const MENUGESTOR = [
	{
		menutitle: 'Gestor',
		Items: [
			{
				title: 'Meu Painel',
				icon: 'ti-layout',
				type: 'link',
				active: true,
				selected: true,
				path: `${process.env.PUBLIC_URL}/dashboard`,
			},
			{
				title: 'Minha unidade',
				icon: 'bi-people',
				type: 'link',
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/minha_unidade`,
			},
			{
				title: 'Desempenho',
				icon: 'ti-bar-chart',
				type: 'sub',
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/avaliacoes`,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/okr_unidade`,
						type: 'link',
						active: false,
						selected: false,
						title: 'OKR'
					},
					{
						path: `${process.env.PUBLIC_URL}/avaliacao_por_resultado_unidade`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Avaliação por resultados'
					},
				]
			},
			{
				title: 'Engajamento',
				icon: 'ti-stats-up',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/climapulso_unidade`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Clima Pulso'
					},
				]
			},
			{
				title: 'Minhas avaliações',
				icon: 'bi-book-half',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/minhas_okrs`,
						type: 'link',
						active: false,
						selected: false,
						title: 'OKR'
					},
					{
						path: `${process.env.PUBLIC_URL}/minhas_av_resultados`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Av. por resultados'
					},
					{
						path: `${process.env.PUBLIC_URL}/meus_climas_pulso`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Clima Pulso'
					},
				]
			},
		]
	},
];

export const MENUCOL = [
	{
		menutitle: 'COLABORADOR',
		Items: [
			{
				title: 'Meu Painel',
				icon: 'ti-home',
				type: 'link',
				active: true,
				selected: true,
				path: `${process.env.PUBLIC_URL}/dashboard`,
			},
			{
				title: 'Minha Unidade',
				icon: 'bi-book-half',
				type: 'link',
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/minha_unidade`
			},
			{
				title: 'Minhas avaliações',
				icon: 'bi-book-half',
				type: 'sub',
				active: false,
				selected: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/minhas_okrs`,
						type: 'link',
						active: false,
						selected: false,
						title: 'OKR'
					},
					{
						path: `${process.env.PUBLIC_URL}/minhas_av_resultados`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Av. por resultados'
					},
					{
						path: `${process.env.PUBLIC_URL}/meus_climas_pulso`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Clima Pulso'
					},
				]
			},

		]
	},

];
