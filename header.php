
<?php require_once('config.php'); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Metadatos Dinámicos -->
    <title><?php echo $metaTitle ?? NOMBRE_EMPRESA; ?></title>
    <meta name="description" content="<?php echo $metaDescription ?? 'Agencia SEO en Valencia especializada en posicionamiento web y marketing digital.'; ?>">
    <meta name="robots" content="<?php echo $metaRobots ?? 'index, follow'; ?>">
    <meta name="keywords" content="agencia seo valencia, consultoría seo, posicionamiento web, seo local, marketing digital">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        .text-primary { color: <?php echo COLOR_PRIMARIO; ?>; }
        .bg-primary { background-color: <?php echo COLOR_PRIMARIO; ?>; }
        .border-primary { border-color: <?php echo COLOR_PRIMARIO; ?>; }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">

<header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="index.php" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            </div>
            <span class="text-xl font-bold tracking-tight">SEO <span class="text-primary">Valencia</span></span>
        </a>
        
        <nav class="hidden md:flex items-center space-x-8 font-medium text-slate-600">
            <a href="index.php#servicios" class="hover:text-primary transition-colors">Servicios</a>
            <a href="empresa.php" class="hover:text-primary transition-colors">Agencia</a>
            <a href="index.php#testimonios" class="hover:text-primary transition-colors">Testimonios</a>
            <a href="#contacto" class="bg-primary text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all">Contactar</a>
        </nav>
    </div>
</header>
<div class="h-20"></div> <!-- Espaciador para el header fixed -->
