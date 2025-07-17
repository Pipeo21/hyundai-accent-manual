import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

const sections = [
  {
    id: "identification",
    title: "Identificación del Vehículo",
    content: `
🔍 VIN (17 dígitos):
1-3: País, fabricante, tipo de vehículo
4-8: Línea, modelo, seguridad y tipo
9: Dígito verificador
10: Año de fabricación (5 = 2005, 6 = 2006)
11: Planta de montaje
12-17: Número secuencial

🎨 Códigos de pintura:
- NW: Blanco Noble
- EB: Negro Ébano
- HL: Rojo Hiphop
- 5S: Plata Espacial
- 2B: Azul Cielo

🖼️ Ubicación del VIN y código de pintura:
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgAAAABJRU5ErkJggg==" alt="Ubicación del VIN" style="width:100%;max-width:400px;" />
    `
  },
  {
    id: "engine-specs",
    title: "Especificaciones del Motor",
    content: `
Motor G4EE 1.4L 4 cilindros en línea:
- Desplazamiento: 1,399 cc
- Potencia: 97 hp @ 6,000 rpm
- Torque: 126 Nm @ 4,700 rpm
- Combustible: Gasolina sin plomo
- Emisiones: Euro III

🔧 Procedimiento de revisión:
1. Inspección visual y revisión de fugas.
2. Nivel y calidad de aceite.
3. Prueba de compresión (175-210 psi).
4. Estado de bujías y cables.

🖼️ Diagrama del motor G4EE:
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgAAAABJRU5ErkJggg==" alt="Diagrama Motor G4EE" style="width:100%;max-width:500px;" />
    `
  },
  {
    id: "transmission",
    title: "Transmisión Automática (A4AF3)",
    content: `
⚙️ Especificaciones:
- Relación 1ª: 2.846
- Relación 2ª: 1.581
- Relación 3ª: 1.000
- Relación 4ª: 0.685
- Reversa: 2.176
- Relación final: 4.041
- Capacity: 6.1 L ATF SP-III

🔧 Mantenimiento:
1. Drenar ATF (35-45 Nm al volver a instalar tapón).
2. Llenar hasta nivel HOT.
3. Stall Test: motor al fondo en D debe llegar a 2400-2800 rpm.

🖼️ Diagrama de engranajes planetarios:
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgAAAABJRU5ErkJggg==" alt="Esquema Transmisión" style="width:100%;max-width:500px;" />
    `
  }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const filtered = sections.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.content.toLowerCase().includes(query.toLowerCase())
  );
  const current = filtered.length ? filtered[0] : sections[0];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Manual Hyundai Accent 2006</h1>
      <Input
        placeholder="Buscar sección..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full"
      />
      <Tabs defaultValue={current.id} className="w-full">
        <TabsList className="flex flex-wrap gap-2">
          {filtered.map(sec => (
            <TabsTrigger key={sec.id} value={sec.id}>{sec.title}</TabsTrigger>
          ))}
        </TabsList>
        {filtered.map(sec => (
          <TabsContent key={sec.id} value={sec.id}>
            <Card>
              <CardContent>
                <div dangerouslySetInnerHTML={{ __html: sec.content }} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
