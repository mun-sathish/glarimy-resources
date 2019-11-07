import groovy.json.*

JsonBuilder builder = new JsonBuilder()
builder.records {
  car {
        name 'HSV Maloo'
        make 'Holden'
        year 2006
        country 'Australia'
        record {
            type 'speed'
            description 'production pickup truck with speed of 271kph'
        }
  }
}
String json = JsonOutput.prettyPrint(builder.toString())
print json

def generator = new JsonGenerator.Options()
        .excludeNulls()
        .excludeFieldsByName('make', 'country', 'record')
        .excludeFieldsByType(Number)
        .addConverter(URL) { url -> "http://groovy-lang.org" }
        .build()

JsonBuilder bldr = new JsonBuilder(generator)
bldr.records {
  car {
        name 'HSV Maloo'
        make 'Holden'
        year 2006
        country 'Australia'
        homepage new URL('http://example.org')
        record {
            type 'speed'
            description 'production pickup truck with speed of 271kph'
        }
  }
}

print bldr.toString()