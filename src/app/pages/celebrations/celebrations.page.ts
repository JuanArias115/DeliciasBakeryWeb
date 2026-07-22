import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { WhatsAppService } from '../../core/services/whatsapp.service';
import { CLOUDINARY_WIDTHS, cldSized } from '../../lib/cloudinary';
import { CardComponent } from '../../shared/ui/card/card.component';
import { IconComponent } from '../../shared/ui/icon/icon.component';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title.component';

interface CelebrationSection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  whatsappMessage: string;
  images: string[];
}

@Component({
  selector: 'app-celebrations-page',
  imports: [CardComponent, IconComponent, SectionTitleComponent],
  templateUrl: './celebrations.page.html',
  styleUrl: './celebrations.page.css'
})
export default class CelebrationsPage implements OnInit, OnDestroy {
  readonly sections: CelebrationSection[] = [
    {
      id: 'eventos-catering',
      eyebrow: 'Subcategoría',
      title: 'Eventos & catering',
      description:
        'Creamos detalles y experiencias para eventos empresariales, celebraciones corporativas y encuentros especiales. Diseñamos opciones personalizadas para cumpleaños, reuniones, aniversarios y eventos sociales como 15 años, matrimonios y otras celebraciones. Cotiza tu idea y creamos el detalle perfecto para tu evento.',
      ctaLabel: 'WhatsApp',
      whatsappMessage: 'Hola Delicias Bakery, quiero cotizar una propuesta para eventos y catering.',
      images: [
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736576/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-01.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736600/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-02.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736610/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-03.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736623/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-04.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736648/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-05.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736665/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-06.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736674/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-07.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736678/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-08.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736687/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-09.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736695/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-10.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736699/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-11.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736702/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-12.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736705/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-13.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736708/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-15.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736710/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-16.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736711/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-17.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736711/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-18.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736712/deliciasbakery/web/categorias/celebraciones/eventos-catering/eventos-and-catering-19.jpg'
      ]
    },
    {
      id: 'navidad',
      eyebrow: 'Subcategoría',
      title: 'Navidad',
      description:
        'Encuentra detalles especiales para regalar y compartir en Navidad. Contamos con opciones diseñadas para sorprender en esta época del año, desde desayunos y cajas especiales hasta anchetas navideñas ideales para regalos familiares, corporativos o entre amigos. Cotiza tus detalles navideños o tus anchetas para colaboradores.',
      ctaLabel: 'WhatsApp',
      whatsappMessage: 'Hola Delicias Bakery, quiero cotizar detalles o anchetas navideñas.',
      images: [
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736777/deliciasbakery/web/categorias/celebraciones/navidad/navidad-01.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736782/deliciasbakery/web/categorias/celebraciones/navidad/navidad-02.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736787/deliciasbakery/web/categorias/celebraciones/navidad/navidad-0209.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737134/deliciasbakery/web/categorias/celebraciones/navidad/navidad-03-heic.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737137/deliciasbakery/web/categorias/celebraciones/navidad/navidad-03-jpg.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737141/deliciasbakery/web/categorias/celebraciones/navidad/navidad-04-heic.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737144/deliciasbakery/web/categorias/celebraciones/navidad/navidad-04-jpg.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737147/deliciasbakery/web/categorias/celebraciones/navidad/navidad-05.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737153/deliciasbakery/web/categorias/celebraciones/navidad/navidad-06.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737162/deliciasbakery/web/categorias/celebraciones/navidad/navidad-07.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737165/deliciasbakery/web/categorias/celebraciones/navidad/navidad-08.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784737167/deliciasbakery/web/categorias/celebraciones/navidad/navidad-09.jpg'
      ]
    },
    {
      id: 'fechas-especiales',
      eyebrow: 'Subcategoría',
      title: 'Fechas especiales',
      description:
        'Detalles pensados para celebrar los momentos más importantes del año: Día de la Mujer, Día del Hombre, Día de la Madre, Día del Padre, San Valentín, Amor y Amistad, entre otros. Opciones perfectas para sorprender y celebrar a quienes más quieres. Cuéntanos tu idea y creamos el detalle perfecto.',
      ctaLabel: 'WhatsApp',
      whatsappMessage: 'Hola Delicias Bakery, quiero cotizar un detalle para una fecha especial.',
      images: [
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736712/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-portada.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736718/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-01.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736721/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-02.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736724/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-03.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736728/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-04.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736737/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-05.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736741/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-06.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736744/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-07.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736748/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-08.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736757/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-09.jpg',
        'https://res.cloudinary.com/dscih1izv/image/upload/v1784736772/deliciasbakery/web/categorias/celebraciones/fechas-especiales/fechas-especiales-10.jpg'
      ]
    }
  ];

  readonly activeIndexes = signal<Record<string, number>>({
    'eventos-catering': 0,
    navidad: 0,
    'fechas-especiales': 0
  });

  private timer?: ReturnType<typeof setInterval>;

  constructor(private readonly whatsapp: WhatsAppService) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.activeIndexes.update((state) => {
        const nextState = { ...state };

        for (const section of this.sections) {
          nextState[section.id] = ((state[section.id] ?? 0) + 1) % section.images.length;
        }

        return nextState;
      });
    }, 3600);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  imageUrl(image: string): string {
    return cldSized(image, CLOUDINARY_WIDTHS.detail, {
      aspectRatio: '5:4',
      crop: 'fill',
      gravity: 'auto'
    });
  }

  currentImage(section: CelebrationSection): string {
    return section.images[this.currentIndex(section.id)] ?? section.images[0];
  }

  currentIndex(sectionId: string): number {
    return this.activeIndexes()[sectionId] ?? 0;
  }

  next(sectionId: string): void {
    const section = this.sections.find((item) => item.id === sectionId);
    if (!section) {
      return;
    }

    this.activeIndexes.update((state) => ({
      ...state,
      [sectionId]: ((state[sectionId] ?? 0) + 1) % section.images.length
    }));
  }

  prev(sectionId: string): void {
    const section = this.sections.find((item) => item.id === sectionId);
    if (!section) {
      return;
    }

    this.activeIndexes.update((state) => ({
      ...state,
      [sectionId]: ((state[sectionId] ?? 0) - 1 + section.images.length) % section.images.length
    }));
  }

  linkFor(section: CelebrationSection): string {
    return this.whatsapp.createLink(section.whatsappMessage);
  }
}
