import { Model } from "../core/model";
import { Departamento } from "./departamento.model";
import { Funcionario } from "./funcionario.model";

export class Movimentacao extends Model
{

solicitante?: Funcionario;
dataAbertura: any;
 ultimaAtualizacao: any; 
 descricao?: string;
status?: string;
destino?: Departamento;
 movimentacoes?: Movimentacao[];
}
