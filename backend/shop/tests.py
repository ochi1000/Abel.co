from django.test import TestCase
from .models import Category, Product

class ProductModelTest(TestCase):
    def test_str(self):
        cat = Category.objects.create(name='Test')
        prod = Product.objects.create(category=cat, name='Item', price=10, description='', image_url='')
        self.assertEqual(str(prod), 'Item')
