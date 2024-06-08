import { DataSource } from 'typeorm';
import * as path from 'path';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: '172.17.0.2',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'user_management_db',
                entities: [path.join(__dirname, '..', 'services', '**', '*.entity{.ts,.js}')],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];