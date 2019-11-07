import java.util.Calendar

class ClassBuilder {

    GroovyClassLoader loader
    String name
    Class cls
    def imports
    def fields
    def methods

    def ClassBuilder(GroovyClassLoader loader) {
        this.loader = loader
        imports = []
        fields = [:]
        methods = [:]
    }

    def setName(String name) {
        this.name = name
    }

    def addImport(Class importClass) {
        imports << "${importClass.getPackage().getName()}" +
                ".${importClass.getSimpleName()}"
    }

    def addField(String name, Class type) {
        fields[name] = type.simpleName
    }

    def addMethod(String name, Closure closure) {
        methods[name] = closure
    }

    def getCreatedClass() {

        def templateText = '''
<%imports.each {%>import $it\n <% } %> 
class $name
{
<%fields.each {%>    $it.value $it.key \n<% } %>
}
'''

        def data = [name: name, imports: imports, fields: fields]

        def engine = new groovy.text.SimpleTemplateEngine()
        def template = engine.createTemplate(templateText)
        def result = template.make(data)
        cls = loader.parseClass(result.toString())
        methods.each {
            cls.metaClass."$it.key" = it.value
        }
        return cls
    }
}

def builder = new ClassBuilder(this.class.classLoader)
builder.setName("MyClass");

builder.addImport(Calendar)

builder.addField('field1', Integer)
builder.addField('field2', Integer)

builder.addMethod('sum') { field1 + field2 }

builder.addMethod('product') { field1 * field2 }

builder.addMethod('testCalendar') {
    println Calendar.getInstance().getTime()
}

Class myClass = builder.getCreatedClass()
def myInstance = myClass.newInstance()

myInstance.field1 = 1
myInstance.field2 = 2

println myInstance.sum()
println myInstance.product()

myInstance.setField2(1500)
println myInstance.getField2()

myInstance.testCalendar()