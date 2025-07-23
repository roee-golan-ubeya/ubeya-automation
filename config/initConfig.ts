import { config as loadDotenv } from 'dotenv';
loadDotenv({ override: true, quiet: true });

const REQUIRED_ENV_VARS = {
    BASE_URL: 'string',
    ENABLE_FEATURE_X: 'boolean',
    HEADLESS: 'boolean',
    VIEWPORT_WIDTH: 'number',
    VIEWPORT_HEIGHT: 'number',
} as const satisfies Record<string, 'string' | 'number' | 'boolean'>;

type VarTypes = typeof REQUIRED_ENV_VARS;

type ParseType<T> =
    T extends 'number' ? number :
    T extends 'boolean' ? boolean :
    string;

export type Config = {
    [K in keyof VarTypes]: ParseType<VarTypes[K]>
};

let cachedConfig: Config | null = null;

export function initConfig(): Config {
    if (cachedConfig) return cachedConfig;

    const result = {} as Config;

    for (const [key, type] of Object.entries(REQUIRED_ENV_VARS) as [keyof VarTypes, 'string' | 'number' | 'boolean'][]) {
        const value = process.env[key];
        if (value === undefined) {
            console.error(`[config error] Missing required environment variable: ${key}`);
            process.exit(1);
        }

        let parsedValue: any;
        switch (type) {
            case 'number':
                parsedValue = Number(value);
                if (isNaN(parsedValue)) {
                    console.error(`[config error] ${key} must be a valid number.`);
                    process.exit(1);
                }
                break;
            case 'boolean':
                parsedValue = value === 'true';
                break;
            case 'string':
            default:
                parsedValue = value;
        }

        (result as any)[key] = parsedValue;
    }

    cachedConfig = result;
    return cachedConfig;
}

export const testConfig = initConfig();

export default async function globalSetup() {
    initConfig();
    console.log('🔧 Global setup completed successfully');
}
