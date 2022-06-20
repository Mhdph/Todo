import { Repository, EntityRepository } from 'typeorm';
import { Todo } from '../entities/todo.entity';

EntityRepository(Todo);
export class TodoRepository extends Repository<Todo> {}
