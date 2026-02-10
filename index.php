
<?php 
// 1. Definir variables SEO antes del include
$metaTitle = "Agencia SEO Valencia [NOMBRE DE LA EMPRESA] - Marketing Digital";
$metaDescription = "Expertos en posicionamiento web en Valencia. Auditoría SEO, SEO Local y estrategias de crecimiento para captar leads y clientes en Google.";
$metaRobots = "index, follow";

// 2. Incluir Cabecera
include('header.php'); 
?>

<main>
    <!-- H1 Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Agencia SEO Valencia</h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Digitalización de negocios locales y en línea. Mejoramos visibilidad en Google y motores de búsqueda para alcanzar tus metas.
            </p>
        </div>
    </section>

    <!-- Cluster de servicios (H3) -->
    <section id="servicios" class="py-20 bg-slate-50">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php foreach($servicios as $s): ?>
                <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div class="text-primary mb-4">
                        <i data-lucide="<?php echo $s['icon']; ?>" class="w-10 h-10"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-3"><?php echo $s['titulo']; ?></h3>
                    <p class="text-slate-600 text-sm"><?php echo $s['desc']; ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- H2: El mejor posicionamiento web en Valencia -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="md:w-1/2">
                    <h2 class="text-4xl font-bold text-slate-900 mb-8">El mejor posicionamiento web en Valencia</h2>
                    <div class="space-y-6">
                        <div class="flex space-x-4">
                            <div class="text-primary"><i data-lucide="check-circle" class="w-6 h-6"></i></div>
                            <div>
                                <h4 class="font-bold">Generación de clientes</h4>
                                <p class="text-slate-600">No solo tráfico, buscamos conversiones y leads reales para tu negocio.</p>
                            </div>
                        </div>
                        <div class="flex space-x-4">
                            <div class="text-primary"><i data-lucide="check-circle" class="w-6 h-6"></i></div>
                            <div>
                                <h4 class="font-bold">Investigación de palabras clave</h4>
                                <p class="text-slate-600">Keyword research exhaustivo para dominar tu nicho de mercado.</p>
                            </div>
                        </div>
                        <div class="flex space-x-4">
                            <div class="text-primary"><i data-lucide="check-circle" class="w-6 h-6"></i></div>
                            <div>
                                <h4 class="font-bold">Estrategia de crecimiento</h4>
                                <p class="text-slate-600">Plan de visibilidad en Google a largo plazo, sostenible y rentable.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" class="rounded-3xl shadow-xl" alt="SEO Estratégico">
                </div>
            </div>
        </div>
    </section>

    <!-- H2: El posicionamiento SEO de [NOMBRE DE LA EMPRESA] -->
    <section class="py-20 bg-slate-900 text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-8">El posicionamiento SEO de <?php echo NOMBRE_EMPRESA; ?></h2>
            <p class="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
                Con más de 15 años en el sector, entendemos las necesidades y objetivos de los clientes, y trabajamos incansablemente para crear una presencia en línea que refleje tu marca.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <div class="text-4xl font-bold mb-2">15+</div>
                    <div class="text-slate-500 text-sm">Años de experiencia</div>
                </div>
                <div>
                    <div class="text-4xl font-bold mb-2">250+</div>
                    <div class="text-slate-500 text-sm">Proyectos SEO</div>
                </div>
                <div>
                    <div class="text-4xl font-bold mb-2">1M+</div>
                    <div class="text-slate-500 text-sm">Visitas generadas</div>
                </div>
                <div>
                    <div class="text-4xl font-bold mb-2">100%</div>
                    <div class="text-slate-500 text-sm">Compromiso real</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Grid de logos -->
    <section class="py-16 bg-white border-b">
        <div class="container mx-auto px-6">
            <h2 class="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">Empresas que ya han alcanzado sus objetivos</h2>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-40 grayscale">
                <div class="h-8 bg-slate-200 rounded"></div>
                <div class="h-8 bg-slate-200 rounded"></div>
                <div class="h-8 bg-slate-200 rounded"></div>
                <div class="h-8 bg-slate-200 rounded"></div>
                <div class="h-8 bg-slate-200 rounded"></div>
                <div class="h-8 bg-slate-200 rounded"></div>
            </div>
        </div>
    </section>

    <!-- H2: La consultoría SEO que da resultados (CTA) -->
    <section class="py-24 bg-primary text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold mb-6">La consultoría SEO que da resultados</h2>
            <p class="text-white/80 mb-10 text-lg">¿Quieres mejorar tu visibilidad en Google Maps y captar más clientes en Valencia?</p>
            <a href="#contacto" class="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full shadow-lg hover:bg-slate-50 transition-all">Solicitar Auditoría Gratis</a>
        </div>
    </section>

    <!-- Preguntas frecuentes -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6 max-w-3xl">
            <h2 class="text-3xl font-bold text-center mb-12">Preguntas frecuentes</h2>
            <div class="space-y-4">
                <details class="group p-6 border rounded-2xl">
                    <summary class="list-none flex justify-between items-center cursor-pointer font-bold">
                        ¿Qué es la consultoría SEO estratégica?
                        <i data-lucide="chevron-down" class="group-open:rotate-180 transition-transform"></i>
                    </summary>
                    <p class="mt-4 text-slate-600">Es un plan personalizado donde analizamos tu competencia, tu estado actual y definimos las keywords con mayor potencial de negocio.</p>
                </details>
                <details class="group p-6 border rounded-2xl">
                    <summary class="list-none flex justify-between items-center cursor-pointer font-bold">
                        ¿Por qué es importante el SEO Local?
                        <i data-lucide="chevron-down" class="group-open:rotate-180 transition-transform"></i>
                    </summary>
                    <p class="mt-4 text-slate-600">El SEO Local permite que las empresas de Valencia aparezcan cuando un usuario busca un servicio cerca de su ubicación física.</p>
                </details>
            </div>
        </div>
    </section>
</main>

<?php include('footer.php'); ?>
