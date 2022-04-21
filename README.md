### Information:

* [Zipkin](https://zipkin.io/)
* [Spring Cloud Sleuth + Zipkin](https://medium.com/@kirill.sereda/spring-cloud-sleuth-zipkin-%D0%BF%D0%BE-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8-9f8504581dae)

### Client/web app side configuration

1. add sleuth and zipkin dependencies for client

```
    implementation 'org.springframework.cloud:spring-cloud-starter-sleuth'
    implementation 'org.springframework.cloud:spring-cloud-sleuth-zipkin'
```

2. configure application.yaml file

```
spring:
  application:
    name: "heroku-scheduler-app"
  zipkin:
    baseUrl: ${ZIPKIN_PORT:http://127.0.0.1:9411}
```

### Run zipkin on heroku

Procfile file <br>

```
web: java -jar libs/zipkin-server-2.23.16.jar --armeria.ports[0].port=$PORT
```

### Run zipkin on locally

default port: 9411 <br>
url: http://localhost:9411/zipkin <br>

```
web: java -jar libs/zipkin-server-2.23.16.jar
```

### Run zipkin on windows

```
zipkin-server.bat
```