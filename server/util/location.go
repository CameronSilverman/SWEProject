package util

import (
	"github.com/ipinfo/go/v2/ipinfo"
	"net"
)

func GetLocationForIP(ip string, token string) (*ipinfo.Core, error) {
	client := ipinfo.NewClient(nil, nil, token)

	info, err := client.GetIPInfo(net.ParseIP(ip))
	if err != nil {
		return nil, err
	}

	return info, nil
}
