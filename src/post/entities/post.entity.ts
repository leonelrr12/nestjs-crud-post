import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 45 })
  slug!: string;
  @Column({ type: 'varchar', length: 100 })
  title: string;
  @Column({ type: 'varchar', length: 45 })
  excerpt?: string;
  @Column({ type: 'text' })
  content!: string;

  @Column({ type: 'varchar', length: 15 })
  category?: string;

  @Column({ type: 'simple-array' })
  tags?: string[];
  
  @Column()
  status: string;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;
}