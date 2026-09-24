function notice(message){let n=document.getElementById('preview-status');if(!n){n=document.createElement('div');n.id='preview-status';n.setAttribute('role','status');document.body.append(n)}n.textContent=message}
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>location.href=b.dataset.go);
document.querySelectorAll('[data-begin]').forEach(b=>b.onclick=()=>notice('Preview complete. The real app opens the prepared activity here. No live attempt is created.'));
document.querySelectorAll('[data-preview-only]:not([data-go]):not([data-begin]),a[href="#"]').forEach(b=>b.onclick=e=>{e.preventDefault();notice('This control belongs to the full app. This preview focuses on choosing training and beginning your first activity.');});
