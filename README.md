### Information:

* [Zipkin](https://zipkin.io/)
* [Spring Cloud Sleuth + Zipkin](https://medium.com/@kirill.sereda/spring-cloud-sleuth-zipkin-%D0%BF%D0%BE-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8-9f8504581dae)

#### configuration zipkin on client/web app:

add configuration to application.yaml <br>

<code>
spring:
  application:
    name: "heroku-scheduler-app"
  zipkin:
    baseUrl: ${ZIPKIN_PORT:http://127.0.0.1:9411}
</code>

#### Run zipkin on heroku:

Procfile file <br>

<code>
web: java -jar libs/zipkin-server-2.23.16.jar --armeria.ports[0].port=$PORT
</code>

#### Run zipkin on localy:

default port: 9411 <br>
url: http://localhost:9411/zipkin <br>

<code>
web: java -jar libs/zipkin-server-2.23.16.jar
</code>