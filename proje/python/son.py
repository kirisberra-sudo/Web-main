import sympy as sp
import numpy as np

def run_cg_lambdified():
    x1,x2=sp.symbols('x1 x2')
    s=sp.symbols('s',real=True)
    vars_sym=(x1,x2)
    
    f_str=input("enter function f(x1,x2):")
    f=sp.sympify(f_str)
    
    x0_str=input("enter starting point x0 (e.g.,1,1):")
    x_vec=np.array([float(i) for i in x0_str.split(',')]).reshape(-1,1)
    
    iterations=int(input("enter number of iterations:"))
    
    grad_sym=sp.Matrix([sp.diff(f,v)for v in vars_sym])
    grad_num=sp.lambdify(vars_sym,grad_sym,'numpy')
    
    g_curr=np.array(grad_num(*x_vec.flatten())).astype(float)
    p_curr=-g_curr
    
    print(f"\n--- INITAL STATE ---")
    print(f"Gradient Vector g(x):\n{grad_sym}")
    print(f"g0:\n{g_curr.flatten()}")
    print(f"p0:\n{p_curr.flatten()}")
    
    for k in range(iterations):
         print(f"\n{'='*15} ITERATİON {k+1} {'='*15}")
         
    x_s=x_vec+s*p_curr
    g_s_expr=grad_sym.subs({x1: x_s[0,0],x2:x_s[1,0]})
    
    print(f"g_{k+1}(s) expression:")
    sp.pprint(g_s_expr)
    
    dot_eq=(sp.Matrix(p_curr).T*g_s_expr)[0]
    s_val=float(sp.solve(dot_eq,s)[0].evalf())
    print(f"calculated Step Size (s):{s_val:6f}")
    
    x_next=x_vec+s_val*p_curr
    print(f"New Point x_{k+1}:\n{x_next.flatten()}")
    g_next=np.array(grad_num(*x_next.flatten())).astype(float)
    print(f"New Gradient g_{k+1}:\n{g_next.flatten()}")
    beta=float((g_next.T @ g_next)/(g_curr.T @ g_curr))
    print(f"Beta_{k}:{beta:.6f}")
    
    p_next=-g_next+beta*p_curr
    print(f"New Direction p_{p_next.flatten()}")
    
    x_vec,g_curr,p_curr=x_next,g_next,p_next
    if __name__ ==" __main__ ":
        run_cg_lambdified()
        
         
    
    