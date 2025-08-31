from django.http import JsonResponse, Http404
from .models import Product


def product_list(request):
    products = list(Product.objects.values('id', 'name', 'price', 'image_url'))
    return JsonResponse({'products': products})


def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        raise Http404('Product not found')
    data = {
        'id': product.id,
        'name': product.name,
        'description': product.description,
        'price': float(product.price),
        'image_url': product.image_url,
    }
    return JsonResponse(data)
