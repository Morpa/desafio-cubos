import { Story, Meta } from '@storybook/react/types-6-0'
import MovieCard, { MovieCardProps } from '.'

export default {
  title: 'MovieCard',
  component: MovieCard,
  args: {
    genre_ids: [35, 10751, 14, 10749],
    original_title: 'Xuxa - Lua de Cristal',
    overview:
      'Maria da Graça é uma jovem bonita e sonhadora que se muda para a cidade grande com a intenção de fazer aulas de canto. Lá, ela se hospeda na casa de sua tia Zuleika e seus primos Lidinha e Mauricinho, que vivem atormentando sua vida, fazendo-a trabalhar como uma escrava. Por ser um tanto ingênua e tímida, Maria vive caindo nas armações de Lidinha; enquanto é alvo das constantes cantadas de Mauricinho, ao que ela rejeita; tendo de suportar também os detestáveis amigos deste, enquanto não consegue se adaptar á cidade. Porém, em meio a tantos problemas, Maria conhece a pequena Duda, sua vizinha; e o desajeitado Bob, que se tornam seus amigos. Bob é a materialização do príncipe de Maria em seus sonhos, e este a ajudará a conseguir emprego em sua lanchonete e a transformará na estrela de um show.',
    popularity: 6.416,
    poster_path: '/dkyfy7ifoYky2IeDCwVukOZmTwV.jpg',
    release_date: '1990-06-22',
    title: 'Xuxa - Lua de Cristal',
    vote_average: 5.5
  },
  argTypes: {
    genre_ids: { type: 'string' }
  }
} as Meta

export const Default: Story<MovieCardProps> = (args) => <MovieCard {...args} />
