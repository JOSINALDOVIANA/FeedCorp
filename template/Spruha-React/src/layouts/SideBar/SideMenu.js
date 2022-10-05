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
					{
						path: `${process.env.PUBLIC_URL}/`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Avaliação de desempenho'
					},
					{
						path: `${process.env.PUBLIC_URL}/reuniao1:1`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Reunião 1:1'
					},
					// {
					// 	path: `${process.env.PUBLIC_URL}/avr`,
					// 	type: 'link',
					// 	active: false,
					// 	selected: false,
					// 	title: 'Escalas Gráficas'
					// },
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
					// {
					// 	path: `${process.env.PUBLIC_URL}/avr`,
					// 	type: 'link',
					// 	active: false,
					// 	selected: false,
					// 	title: 'Pesquisas Internas'
					// },
				]
			},
			// {
			// 	title: 'Relatórios',
			// 	icon: 'ti-home',
			// 	type: 'link',
			// 	active: false,
			// 	selected: false,
			// 	path: `${process.env.PUBLIC_URL}/`,
			// },

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
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/dashboard`,
			},
			{
				title: 'Minha Unidade',
				icon: 'bi-book-half',
				type: 'link',
				active: false,
				selected: false,
				path: `${process.env.PUBLIC_URL}/avaliacoes`
				// children: [
				// 	{
				// 		path: `${process.env.PUBLIC_URL}/crytocurrencies/dashboard`,
				// 		type: 'link',
				// 		active: false,
				// 		selected: false,
				// 		title: 'Dashboard'
				// 	},
				// ]
			},

		]
	},

];
