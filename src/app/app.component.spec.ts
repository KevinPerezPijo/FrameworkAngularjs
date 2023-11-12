// app.component.spec.ts
// Archivo generado automaticamente
import { TestBed } from '@angular/core/testing'; // Importando el modulo TestBed para los servicios para realizar pruebas unitarias en la aplicacion
import { RouterTestingModule } from '@angular/router/testing'; // Importando RouterTestingModule para los servicios para la navegacion entre vistas en la aplicacion
import { AppComponent } from './app.component'; // Importando AppComponent el cual es el componente raiz de la aplicacion

describe('AppComponent', () => { // Definiendo pruebas unitarias para el componente raiz AppComponent
  beforeEach(() => TestBed.configureTestingModule({ //Defniendo acciones que se deben realizar antes de cada prueba unitaria
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => { // Definiendo una prueba unitaria para verificar que el componente raiz AppComponent se crea correctamente
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '1_FrameworkAngularjs'`, () => { // Definiendo una prueba unitaria para verificar si el titulo doel componente raiz es correcto
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('1_FrameworkAngularjs');
  });

  it('should render title', () => { // Definiendo una prueba unitaria para verificar si el titulo del componente raiz se muestra correctamente en la vista
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('1_FrameworkAngularjs app is running!');
  });
});
