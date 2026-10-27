import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ButtonComponent } from './button.component';

@Component({
  imports: [ButtonComponent],
  template: `
    <ui-button href="https://wa.me/573122859640">Pedir por WhatsApp</ui-button>
    <ui-button routerLink="/productos/pumpkin-spice-cake">Ver producto</ui-button>
    <ui-button>Confirmar</ui-button>
  `
})
class ButtonHost {}

describe('ButtonComponent labels', () => {
  it('renders projected text in external links, internal links and buttons', async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHost], providers: [provideRouter([])]
    }).compileComponents();
    const fixture = TestBed.createComponent(ButtonHost);
    fixture.detectChanges();
    const controls = fixture.nativeElement.querySelectorAll('a, button');
    expect(Array.from(controls, (control: any) => control.textContent.trim())).toEqual([
      'Pedir por WhatsApp', 'Ver producto', 'Confirmar'
    ]);
  });
});
