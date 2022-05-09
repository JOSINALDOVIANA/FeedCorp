import knex from 'knex';
import { staging, development } from '../../knexfile.js';
const conexao = knex(development);

export default conexao;