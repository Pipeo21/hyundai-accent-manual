
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
<img src="/images/vin-location.png" alt="Ubicación del VIN" style="width:100%;max-width:400px;" />
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
<img src="/images/engine-diagram.png" alt="Diagrama Motor G4EE" style="width:100%;max-width:500px;" />
    `
  },
  {
    id: "torque-values",
    title: "Valores de Torque",
    content: `
🔩 Valores estándar según diámetro:
| Diámetro | Torque (Nm) |
|:--------:|:-----------:|
| M5       | 3 - 6       |
| M6       | 5 - 11      |
| M8       | 12 - 25     |
| M10      | 25 - 50     |
| M12      | 35 - 80     |
| M14      | 75 - 140    |
| M16      | 110 - 210   |
| M18      | 160 - 300   |
| M20      | 220 - 420   |
| M22      | 290 - 550   |
| M24      | 360 - 700   |

📌 Precauciones:
- Reducir en 15% si hay grasa o aceite.
- No usar arandelas dentadas con torque normal.
    `
  },
  {
    id: "lubricants",
    title: "Lubricantes Recomendados",
    content: `
🛢️ Tipo y estándar:
- Motor: API SL/SJ, ILSAC GF-3
- Trans mi sión manual: MTF 75W/85 (API GL-4)
- Transmisión automática: ATF SP-III
- Dirección asistida: PSF-III
- Frenos: DOT 3 o DOT 4
- Refrigerante: Etilenglicol base aluminio

🧪 Capacidades:
- Aceite motor: 3.3 L
- Refrigerante: 5.5 - 5.8 L
- Caja manual: 2.0 L
- Caja automática: 6.1 L
- Dirección asistida: 0.75 - 0.8 L
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
- Final: 4.041

🔧 Mantenimiento:
1. Drenar ATF (35-45 Nm al volver a instalar tapón).
2. Llenar hasta nivel HOT.
3. Stall Test en D: 2400-2800 rpm.

🖼️ Diagrama de engranajes planetarios:
<img src="/images/transmission-schematic.png" alt="Esquema Transmisión" style="width:100%;max-width:500px;" />
    `
  },
  {
    id: "electrical-system",
    title: "Sistema Eléctrico y Sensores",
    content: `
⚡ Componentes:
- Sensor ATF: 2.16V @ 72°C
- PG-A Entrada: rpm turbina
- PG-B Salida: rpm salida
- TPS: voltaje proporcional acelerador
- Inhibitor Switch: P, N, D, 2, L

🔌 Diagnóstico:
1. Verificar continuidad y voltajes.
2. Revisar conexión y corrosión.
3. Reemplazar sensores fuera de rango.

🖼️ Diagrama eléctrico:
<img src="/images/electrical-diagram.png" alt="Circuito Eléctrico" style="width:100%;max-width:500px;" />
    `
  },
  {
    id: "dtc-codes",
    title: "Códigos de Diagnóstico (DTC)",
    content: `
📋 Códigos comunes:
- P0707: Range Switch Circuit
- P0713: ATF Temp Sensor High
- P0731-P0734: Gear Ratio Incorrect
- P0741: TCC Stuck Off
- P0750-P0760: Shift Solenoid Circuit

🔧 Uso de Scan Tool:
1. Conectar OBD-II.
2. Leer y borrar códigos.
    
🖼️ Puerto OBD-II:
<img src="/images/obd-port.png" alt="Puerto OBD" style="width:100%;max-width:400px;" />
    `
  },
  {
    id: "troubleshooting",
    title: "Pruebas Hidráulicas",
    content: `
🔍 Presiones estándar:
- D1: 7-9 kg/cm²
- D2: 3-5 kg/cm²
- R: 8-10 kg/cm²

📝 Procedimiento:
1. Calentar ATF a 80-100°C.
2. Conectar manómetro.
3. Comparar con valores.

🖼️ Puerto de prueba:
<img src="/images/pressure-test-port.png" alt="Puerto Prueba" style="width:100%;max-width:500px;" />
    `
  },
  {
    id: "lift-points",
    title: "Puntos de Elevación",
    content: `
📍 Soportes:
- Bieletas delanteras.
- Sub-chasis trasero.

🔧 Procedimiento:
1. Colocar gato.
2. Asegurar con torres.
3. Verificar estabilidad.

🖼️ Puntos de elevación:
<img src="/images/lift-points.png" alt="Puntos Elevación" style="width:100%;max-width:500px;" />
    `
  },
  {
    id: "towing",
    title: "Remolque de Emergencia",
    content: `
🚗 Métodos:
- Flatbed.
- Enganche delantero.

⚠️ Automático:
1. Freno mano suelto.
2. N.
3. <30km, <50km/h.

🖼️ Puntos de remolque:
<img src="/images/towing-points.png" alt="Puntos Remolque" style="width:100%;max-width:500px;" />
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
