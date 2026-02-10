
<footer id="contacto" class="bg-slate-900 text-slate-300 pt-20 pb-10">
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
                <h3 class="text-white text-xl font-bold mb-6"><?php echo NOMBRE_EMPRESA; ?></h3>
                <p class="text-slate-400 leading-relaxed">
                    Especialistas en la digitalización de negocios locales y en línea. Mejoramos tu visibilidad en Google y motores de búsqueda.
                </p>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6">Enlaces Rápidos</h4>
                <ul class="space-y-4">
                    <li><a href="index.php" class="hover:text-white transition-colors">Inicio</a></li>
                    <li><a href="empresa.php" class="hover:text-white transition-colors">Sobre Nosotros</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Política de Privacidad</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold mb-6">Contacto</h4>
                <ul class="space-y-4">
                    <li class="flex items-center space-x-3">
                        <span class="text-primary">Tel:</span> <span><?php echo TELEFONO; ?></span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <span class="text-primary">Email:</span> <span><?php echo EMAIL; ?></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; <?php echo date('Y'); ?> <?php echo NOMBRE_EMPRESA; ?>. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>
  lucide.createIcons();
</script>
</body>
</html>
