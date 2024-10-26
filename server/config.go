package main

type RootConfig struct {
	Database   DatabaseConfig `toml:"database"`
	Server     ServerConfig   `toml:"server"`
	CorsConfig CorsConfig     `toml:"cors"`
	Session    SessionsConfig `toml:"session"`
}

type DatabaseConfig struct {
	Server     string `toml:"server"`
	Port       int    `toml:"port"`
	User       string `toml:"user"`
	Password   string `toml:"password"`
	Database   string `toml:"database"`
	Encryption string `toml:"encryption"`
	Timezone   string `toml:"timezone"`
}

type ServerConfig struct {
	Port int `toml:"port"`
}

type CorsConfig struct {
	Origins []string `toml:"origins"`
	Methods []string `toml:"methods"`
}

type SessionsConfig struct {
	Token         string `toml:"token"`
	LocationToken string `toml:"location_token"`
}
