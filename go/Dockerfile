FROM golang:1.15.0-alpine as build
WORKDIR /hello
COPY /hello .
RUN go build -o /go/bin/hello -ldflags "-s -w"

FROM scratch
COPY --from=build /go/bin/hello /go/bin/hello
ENTRYPOINT [ "/go/bin/hello" ]