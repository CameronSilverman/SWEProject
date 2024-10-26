FROM golang

WORKDIR /go/src/server

ADD . .

RUN go get -d -v ./...
RUN go install -v ./...

RUN go build

CMD ["./start.sh"]